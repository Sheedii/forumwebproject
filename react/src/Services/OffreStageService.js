import axios from 'axios';

const OFFRESTAGE_API_BASE_URL = "http://localhost:8080/api/v1/offrestages";

class OffreStageService {
  getOffreStageService() {
    return axios.get(OFFRESTAGE_API_BASE_URL);
  }
}

export default new OffreStageService();