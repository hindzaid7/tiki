import React from 'react';
description =  models.TextField(null=True,blank=True)
    price = models.DecimalField(max_digits=7,decimal_places=2,null=True,blank=True)
    font = models.CharField(max_length=200,null=True,blank=True)
    Comment = models.TextField(null=True,blank=True)
    style = models.CharField(max_length=200,null=True,blank=True)
export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Description</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
