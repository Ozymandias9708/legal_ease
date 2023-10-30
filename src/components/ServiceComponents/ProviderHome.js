import React from 'react'
import ProviderNavbar from './ProviderNavbar'
import ProviderFooter from './ProviderFooter'
// import { Link } from 'react-router-dom'
import { ActiveCases } from './ActiveCases'

const ProviderHome = () => {
  return (
    <div>
      <ProviderNavbar active={'dashboard'} />
      <section className="text-gray-600 body-font mt-20">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2 cursor-pointer">
              <h2 className="title-font font-medium sm:text-4xl text-3xl">2.7K</h2>
              <p className="leading-relaxed">Cases Taken</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2 cursor-pointer">
              <h2 className="title-font font-medium sm:text-4xl text-3xl">1.8K</h2>
              <p className="leading-relaxed">Clients</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2 cursor-pointer">
              <h2 className="title-font font-medium sm:text-4xl text-3xl">35</h2>
              <p className="leading-relaxed">Active Cases</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2 cursor-pointer">
              <h2 className="title-font font-medium sm:text-4xl text-3xl">4</h2>
              <p className="leading-relaxed">Rating</p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative overflow-x-auto shadow-md">
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
              ActiveCases.map((elem,index) => {
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

      <ProviderFooter />
    </div>
  )
}

export default ProviderHome