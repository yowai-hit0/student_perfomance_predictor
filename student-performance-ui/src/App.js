import React, { useState } from "react";
import axios from "axios";
import { CSSTransition } from "react-transition-group";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: 15,
    address: "U",
    Pstatus: "T",
    guardian: "mother",
    traveltime: 1,
    studytime: 1,
    failures: 0,
    paid: "no",
    activities: "no",
    internet: "no",
    romantic: "no",
    health: 1,
    absences: 0,
    G1: 0,
    G2: 0,
  });
  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/predict", formData);
      setPrediction(response.data.predicted_final_grade);
    } catch (error) {
      console.error("Error making prediction:", error);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Step 1: Personal Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <input
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  min="15"
                  max="22"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <select
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="U">Urban</option>
                  <option value="R">Rural</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Parental Status</label>
                <select
                  name="Pstatus"
                  value={formData.Pstatus}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="T">Living Together</option>
                  <option value="A">Apart</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Guardian</label>
                <select
                  name="guardian"
                  value={formData.guardian}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="mother">Mother</option>
                  <option value="father">Father</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <button
              onClick={nextStep}
              className="w-full mt-6 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Step 2: Academic Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Travel Time to School</label>
                <select
                  name="traveltime"
                  value={formData.traveltime}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value={1}>Less than 15 minutes</option>
                  <option value={2}>15 to 30 minutes</option>
                  <option value={3}>30 minutes to 1 hour</option>
                  <option value={4}>More than 1 hour</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Weekly Study Time</label>
                <select
                  name="studytime"
                  value={formData.studytime}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value={1}>Less than 2 hours</option>
                  <option value={2}>2 to 5 hours</option>
                  <option value={3}>5 to 10 hours</option>
                  <option value={4}>More than 10 hours</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Number of Past Failures</label>
                <input
                  name="failures"
                  type="number"
                  value={formData.failures}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  min="0"
                  max="4"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Paid Classes</label>
                <select
                  name="paid"
                  value={formData.paid}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={prevStep}
                className="w-1/2 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition mr-2"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                className="w-1/2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Step 3: Additional Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Extracurricular Activities</label>
                <select
                  name="activities"
                  value={formData.activities}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Internet Access</label>
                <select
                  name="internet"
                  value={formData.internet}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Romantic Relationship</label>
                <select
                  name="romantic"
                  value={formData.romantic}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Health Status</label>
                <select
                  name="health"
                  value={formData.health}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value={1}>Very Bad</option>
                  <option value={2}>Bad</option>
                  <option value={3}>Neutral</option>
                  <option value={4}>Good</option>
                  <option value={5}>Very Good</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Number of Absences</label>
                <input
                  name="absences"
                  type="number"
                  value={formData.absences}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  min="0"
                  max="93"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">First Period Grade (G1)</label>
                <input
                  name="G1"
                  type="number"
                  value={formData.G1}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  min="0"
                  max="20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Second Period Grade (G2)</label>
                <input
                  name="G2"
                  type="number"
                  value={formData.G2}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  min="0"
                  max="20"
                />
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={prevStep}
                className="w-1/2 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition mr-2"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="w-1/2 bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
              >
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Student Performance Predictor</h1>
      <CSSTransition in={true} timeout={300} classNames="fade" unmountOnExit>
        {renderStep()}
      </CSSTransition>
      {prediction && (
        <div className="mt-8 p-6 bg-green-100 border border-green-400 text-green-700 rounded-md">
          <h2 className="text-2xl font-bold">Predicted Final Grade: {prediction}</h2>
        </div>
      )}
    </div>
  );
};

export default App;