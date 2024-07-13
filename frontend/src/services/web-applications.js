import axios from "axios";

const BASE_URL = `${
  import.meta.env.VITE_API_BASE_URL
}/projects/civil-engineering`;

const getWebAppProjectItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data.message || "Error fetching civil project items"
    );
  }
};

const getWebAppProjectItemById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data.message || "Error fetching civil project item"
    );
  }
};

const createWebAppProjectItem = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/`, data);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data.message || "Error creating civil project item"
    );
  }
};

const updateWebAppProjectItem = async (id, data) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data.message || "Error updating civil project item"
    );
  }
};

const deleteWebAppProjectItem = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data.message || "Error deleting civil project item"
    );
  }
};

export {
  getWebAppProjectItems,
  getWebAppProjectItemById,
  createWebAppProjectItem,
  updateWebAppProjectItem,
  deleteWebAppProjectItem,
};
