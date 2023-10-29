import React from 'react'
import ProviderNavbar from './ProviderNavbar'
import { CasesTakenlist } from './CasesTakenlist'
import ProviderFooter from './ProviderFooter'

const CasesTaken = () => {
  return (
    <div>
        <ProviderNavbar active={'cases'}/>
        <div className="relative overflow-x-auto shadow-md mt-28">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase border-b bg-blue-800 text-white">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Client name
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Case
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Start Date
              </th>
            </tr>
          </thead>
          <tbody>
            {
              CasesTakenlist.map((elem,index) => {
                return (<tr className={`border-b  ${(index+1)%2 === 0? 'bg-blue-100':''}`} key={index}>
                  <th scope="row" className="px-6 py-2 font-medium  text-center">
                    {elem.name}
                  </th>
                  <td className="px-6 py-2 text-center">
                    {elem.case}
                  </td>
                  <td className="px-6 py-2 text-green-600 font-bold  text-center">
                    {elem.status}
                  </td>
                  <td className="px-6 py-2 text-center">
                    {elem.start}
                  </td>
                </tr>)
              })
            }
          </tbody>
        </table>
      </div>
      <ProviderFooter/>
    </div>
  )
}

export default CasesTaken