import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './apply.css';

function Apply() {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    nationalId: '',
    address: '',
    
    // Employment Information
    employer: '',
    jobTitle: '',
    employmentDuration: '',
    monthlySalary: '',
    
    // Loan Details
    loanAmount: '',
    loanPurpose: '',
    loanDuration: '',
    
    // Collateral Information
    collateralType: '',
    collateralValue: '',
    collateralDescription: '',
    
    // Guarantor Information
    guarantorFirstName: '',
    guarantorLastName: '',
    guarantorRelation: '',
    guarantorPhone: '',
    guarantorEmail: '',
    guarantorAddress: '',
    guarantorEmployer: '',
    guarantorMonthlySalary: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="apply-container">
      <nav className="apply-nav">
        <Link to="/" className="back-link">← Back to Home</Link>
      </nav>
      <h1>Loan Application Form</h1>
      <form onSubmit={handleSubmit} className="loan-form">
        {/* Personal Information Section */}
        <section className="form-section">
          <h2>Personal Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth*</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number*</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="nationalId">National ID Number*</label>
              <input
                type="text"
                id="nationalId"
                name="nationalId"
                value={formData.nationalId}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="address">Residential Address*</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </section>

        {/* Employment Information Section */}
        <section className="form-section">
          <h2>Employment Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="employer">Current Employer*</label>
              <input
                type="text"
                id="employer"
                name="employer"
                value={formData.employer}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="jobTitle">Job Title*</label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="employmentDuration">Employment Duration*</label>
              <input
                type="text"
                id="employmentDuration"
                name="employmentDuration"
                value={formData.employmentDuration}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="monthlySalary">Monthly Salary (KES)*</label>
              <input
                type="number"
                id="monthlySalary"
                name="monthlySalary"
                value={formData.monthlySalary}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </section>

        {/* Loan Details Section */}
        <section className="form-section">
          <h2>Loan Details</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="loanAmount">Loan Amount (KES)*</label>
              <input
                type="number"
                id="loanAmount"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="loanDuration">Loan Duration (Months)*</label>
              <input
                type="number"
                id="loanDuration"
                name="loanDuration"
                value={formData.loanDuration}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="loanPurpose">Purpose of Loan*</label>
              <textarea
                id="loanPurpose"
                name="loanPurpose"
                value={formData.loanPurpose}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </section>

        {/* Collateral Information */}
        <section className="form-section">
          <h2>Collateral Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="collateralType">Type of Collateral*</label>
              <select
                id="collateralType"
                name="collateralType"
                value={formData.collateralType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Collateral Type</option>
                <option value="property">Real Estate Property</option>
                <option value="vehicle">Vehicle</option>
                <option value="savings">Fixed Deposit</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="collateralValue">Collateral Value (KES)*</label>
              <input
                type="number"
                id="collateralValue"
                name="collateralValue"
                value={formData.collateralValue}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="collateralDescription">Collateral Description*</label>
              <textarea
                id="collateralDescription"
                name="collateralDescription"
                value={formData.collateralDescription}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </section>

        {/* Guarantor Information */}
        <section className="form-section">
          <h2>Guarantor Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="guarantorFirstName">First Name*</label>
              <input
                type="text"
                id="guarantorFirstName"
                name="guarantorFirstName"
                value={formData.guarantorFirstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="guarantorLastName">Last Name*</label>
              <input
                type="text"
                id="guarantorLastName"
                name="guarantorLastName"
                value={formData.guarantorLastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="guarantorRelation">Relationship*</label>
              <input
                type="text"
                id="guarantorRelation"
                name="guarantorRelation"
                value={formData.guarantorRelation}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="guarantorPhone">Phone Number*</label>
              <input
                type="tel"
                id="guarantorPhone"
                name="guarantorPhone"
                value={formData.guarantorPhone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="guarantorEmail">Email Address*</label>
              <input
                type="email"
                id="guarantorEmail"
                name="guarantorEmail"
                value={formData.guarantorEmail}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="guarantorEmployer">Employer*</label>
              <input
                type="text"
                id="guarantorEmployer"
                name="guarantorEmployer"
                value={formData.guarantorEmployer}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="guarantorMonthlySalary">Monthly Salary (KES)*</label>
              <input
                type="number"
                id="guarantorMonthlySalary"
                name="guarantorMonthlySalary"
                value={formData.guarantorMonthlySalary}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </section>

        <div className="form-actions">
          <button type="submit" className="submit-btn">Submit Application</button>
          <button type="reset" className="reset-btn">Reset Form</button>
        </div>
      </form>
    </div>
  );
}

export default Apply;