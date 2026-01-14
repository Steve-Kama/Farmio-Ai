import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { addFarmer, addFeedback, listFarmers, listInsights } from './data';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/status', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.get('/insights', (req, res) => {
  res.json({ insights: listInsights() });
});

app.get('/farmers', (req, res) => {
  res.json({ farmers: listFarmers() });
});

app.post('/farmers', (req, res) => {
  const { name, crop } = req.body;
  if (!name) return res.status(400).json({ error: 'name is required' });
  const created = addFarmer({ name, crop });
  res.status(201).json(created);
});

app.post('/feedback', (req, res) => {
  const { name, email, message } = req.body;
  if (!message) return res.status(400).json({ error: 'message is required' });
  const created = addFeedback({ name, email, message });
  res.status(201).json(created);
});

const port = process.env.PORT ? Number(process.env.PORT) : 4000;
app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});
