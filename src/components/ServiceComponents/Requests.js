import React, { useState } from 'react'
import ProviderNavbar from './ProviderNavbar'
import { RequestedCase } from './RequestCases'

const Requests = () => {

  const [accept, setAccept] = useState({ status: false, index: null });
  const [reject, setReject] = useState({ status: false, index: null });

  const handleAccept = (index) => {
    setAccept({ status: true, index: index })
  }

  const handleReject = (index) => {
    setReject({ status: true, index: index })
  }
  return (
    <div>
      <ProviderNavbar active={'request'} />
      <div className="relative overflow-x-auto shadow-md mt-24">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase border-b bg-blue-600 text-white">
            <tr>
              <th scope="col" className="px-6 py-2 text-center">
                Client name
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Case
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Posted
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              RequestedCase.map((elem, index) => {
                return (<tr className="border-b" key={index}>
                  <th scope="row" className="px-6 py-2 font-medium  text-center">
                    {elem.name}
                  </th>
                  <td className="px-6 py-2 text-center">
                    {elem.case}
                  </td>
                  <td className="px-6 py-2 text-center">
                    {elem.posted}
                  </td>
                  <td className="px-6 py-2 text-center">
                    {
                      ((!accept.status && !reject.status) || (index !== accept.index && index !== reject.index) ) &&
                      <div>
                        <i className="fa-solid fa-check bg-green-600 p-2 cursor-pointer text-white rounded-full mr-2" title='accept' onClick={() => { handleAccept(index) }} ></i>
                        <i className="fa-solid fa-xmark p-2 cursor-pointer text-white rounded-full bg-red-600" title='reject' onClick={() => handleReject(index)}></i>
                      </div>
                    }
                    {
                         accept.status && index === accept.index &&
                         <p className='text-green-600 font-semibold'>Accepted</p>
                    }
                    
                    {
                         reject.status && index === reject.index &&
                         <p className='text-red-600 font-semibold'>Rejected</p>
                    }
                 
                  </td>
                </tr>)
              })
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Requests