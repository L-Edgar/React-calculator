import React from 'react'
import {MdSend} from 'react-icons/md'
const ExpenseForm = () => {
  return (
    <form action="">
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="expense">Charge</label>
          <input type="text" className='form-control' id="charge" name="charge" placeholder='e.g. rent'/>
        </div>
        <div className="form-group">
          <label htmlFor="expense">amount</label>
          <input type="text" className='form-control' id="amount" name="amount" placeholder='e.g. 100'/>
        </div>
      </div>
      <button type='submit' className='btn'>Submit<MdSend/></button>
    </form>
  )
}

export default ExpenseForm
