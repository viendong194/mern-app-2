import express from 'express';

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  return res.json({
    success: true,
    message: "You're authorized to see this secret message."
  });
});

export default router