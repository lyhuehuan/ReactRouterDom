import axios from "axios";
import { BASE_URL } from "../../BaseURL/url";

export const getShirts = async () => await axios.get(`${BASE_URL}/shirts`);

export const getShirtById = async (shirtId) =>
  await axios.get(`${BASE_URL}/shirts/${shirtId}`);

export const createShirt = async (shirt) =>
  await axios.post(`${BASE_URL}/shirts/`, shirt);

export const updateShirt = async (shirtId, shirt) =>
  await axios.put(`${BASE_URL}/shirts/${shirtId}`, shirt);

export const deleteShirt = async (shirtId) =>
  await axios.delete(`${BASE_URL}/shirts/${shirtId}`);