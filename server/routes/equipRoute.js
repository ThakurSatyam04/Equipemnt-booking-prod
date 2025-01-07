import express from "express"
import { createEquip, getEquip, createSlot, updateSlot, getSlot, getSlots, equipStatus,deleteEquip, updateEquip,getAllSlots,deleteExpiredSlots } from "../controllers/EquipController.js";

const router = express.Router(); 
 
router.post("/:labid", createEquip) 
router.get("/:equipid", getEquip)
router.put("/:equipid", updateEquip)
router.delete("/:labid/:equipid",deleteEquip) 

router.put("/slots/:equipid", createSlot)
router.put("/slots/:equipid/:slotid", updateSlot)
router.get("/slots/:labid", getAllSlots)
router.get("/slots/equip/:equipid", getSlots)
router.get("/slots/:equipid/:slotid", getSlot) 
router.put("/status/:equipid/", equipStatus)
router.put('/deleteExpiredSlots', deleteExpiredSlots);


// router.post("/:labid/:equipid/slots", createSlot)
// router.put("/:labid/:equipid/slots/:slotId", updateSlot)
// router.get("/:labid/:equipid/slots/:slotId", getSlot)

export default router;