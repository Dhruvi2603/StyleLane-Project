import React from 'react'
import { breadcrumarrow } from '../../utils/Icon'
import Product from '../../pages/Product'

const Breadcrum = (props) => {
    const {product} = props
  return (
    <div className="opacity-90 mt-4">
      Home {breadcrumarrow} Shop {breadcrumarrow} {product.category} {breadcrumarrow} {product.name}
    </div>
  )
}

export default Breadcrum
