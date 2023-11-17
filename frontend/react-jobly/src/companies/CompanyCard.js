import React from 'react';

const CompanyCard = ({company}) => {
  return (
    <div>
      <p>{company.name}</p>
      <p>{company.description}</p>
    </div>
  )
}

export default CompanyCard;