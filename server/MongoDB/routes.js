const express = require('express');
const router = express.Router();

// eine GET-Anfrage
router.get('/', async(req, res) => {

    res.send({ message: "Test" });
});

module.exports = router;


// post Digimoncards
router.post('/DigimonSchema', async(req, res) => {
    const newMember = new Digimon({
        name: req.body.name,
        img: req.body.img,
        level: req.body.level
    })
    await newMember.save();
    res.send(newMember);
});


// post one CardsDBSchema
router.post('/CardsDBSchema', async(req, res) => {
    const newMember = new Cards({
        name: req.body.name,
        color:req.body.color,
        level: req.body.level,
        digi_type:req.body.digi_type,
        attribute:req.body.attribute,
        play_cost:req.body.play_cost,
        evolution_cost:req.body.evolution_cost,
        img: req.body.img
    })
    await newMember.save();
    res.send(newMember);
});




// update DigimonSchema
router.patch('/DigimonSchema/:id', async(req, res) => {
    try {
        const member = await Member.findOne({ _id: req.params.id })

        if (req.body.name) {
            member.name = req.body.name
        }

        if (req.body.required) {
            member.required = req.body.required
        }

        if (req.body.img) {
            member.img = req.body.img
        }

        if (req.body.level) {
            member.level = req.body.level
        }

        await Member.updateOne({ _id: req.params.id }, member);
        res.send(member)
    } catch {
        res.status(404)
        res.send({ error: "Member does not exist!" })
    }
});


// update CardsDBSchema
router.patch('/CardsDBSchema/:id', async(req, res) => {
    try {
        const member = await Member.findOne({ _id: req.params.id })

        if (req.body.name) {
            member.name = req.body.name
        }

        if (req.body.color) {
            member.color = req.body.color
        }

        if (req.body.level) {
            member.level = req.body.level
        }
        if (req.body.digi_type) {
            member.digi_type = req.body.digi_type
        }

        if (req.body.attribute) {
            member.attribute = req.body.attribute
        }

        if (req.body.img_url) {
            member.img_url = req.body.img_url
        }
        if (req.body.play_cost) {
            member.play_cost = req.body.play_cost
        }

        if (req.body.evolution_cost) {
            member.evolution_cost = req.body.evolution_cost
        }

        if (req.body.img) {
            member.img = req.body.img
        }
        await Member.updateOne({ _id: req.params.id }, member);
        res.send(member)
    } catch {
        res.status(404)
        res.send({ error: "Member does not exist!" })
    }
});
