export interface Farmer {
  id: string;
  name: string;
  crop?: string;
}

export interface Feedback {
  id: string;
  name?: string;
  email?: string;
  message: string;
  createdAt: string;
}

const farmers: Farmer[] = [
  { id: '1', name: 'Alice Green', crop: 'Wheat' },
  { id: '2', name: 'Bob Field', crop: 'Corn' }
];

const feedbacks: Feedback[] = [];

export function listFarmers() {
  return farmers;
}

export function addFarmer(farmer: Omit<Farmer, 'id'>) {
  const id = String(Date.now());
  const newF = { id, ...farmer };
  farmers.push(newF);
  return newF;
}

export function addFeedback(f: Omit<Feedback, 'id' | 'createdAt'>) {
  const id = String(Date.now());
  const createdAt = new Date().toISOString();
  const newFb: Feedback = { id, createdAt, ...f } as Feedback;
  feedbacks.push(newFb);
  return newFb;
}

export function listInsights() {
  return [
    { id: 'ins-1', title: 'Yield estimate', value: 'Good' },
    { id: 'ins-2', title: 'Soil moisture', value: 'Moderate' }
  ];
}
