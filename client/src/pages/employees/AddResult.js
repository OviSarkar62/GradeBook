import React from 'react'
import PageTitle from '../../components/PageTitle'
import ResultForm from '../../components/ResultForm'

function AddResult() {
  return (
    <div>
       <PageTitle title="Add Result" />
       <img src="\Result-vec.svg" alt="" height={100} width={100} className='my-2'/>
       <ResultForm />
    </div>
  )
}

export default AddResult