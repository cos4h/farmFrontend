import axios from "./axios.js";


const changeTypes = (bill) =>{
  bill.quantity = parseInt(bill.quantity); 
  bill.price = parseFloat(bill.price); 
  bill.date = bill.date + 'T00:00:00Z';
  
  return bill;
}

export const getBillsRequest = () => {
  const res = axios.get("/bills");
  return res;
}

export const getBillRequest = (id) => axios.get(`/bills/${id}`);

export const createBillRequest = (bill) => {
  const  billUpdated = changeTypes(bill);
  const response = axios.post("/bill", billUpdated);
  return response;
}

export const updateBillRequest = (bill) =>
  axios.put(`/bills/${bill._id}`, bill);

export const deleteBillRequest = (id) => axios.delete(`/bills/${id}`);
