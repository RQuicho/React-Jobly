import React from 'react';

const CompanyCard = (company) => {
  return (
    <div>
      {/* <h1>Card showing company name and short description</h1>
      <p>Clicking card should show company details... CompanyDetails component</p> */}
      <p>{company.name}</p>
      <p>{company.description}</p>
    </div>
  )
}

export default CompanyCard;