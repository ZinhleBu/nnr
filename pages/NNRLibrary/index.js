import Link from 'next/link'
import React from 'react'

const NNRLibrary = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link>
            <a href="/South_African_Nuclear_Safety_Conventions_Reports">
            South African Nuclear Safety Conventions Reports
            </a>
            </Link>
          </li>
          <li>
            <Link>
            <a href="/Annual_Reprts">
            South African Nuclear Safety Conventions Reports
            </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NNRLibrary

export function South_African_Nuclear_Safety_Conventions_Reports()  {
  return (
<div>
South African Nuclear Safety Conventions Reports

</div>
  )
}


export function Annual_Reports()  {
  return (
<div>
Annual Reports
</div>
  )
}