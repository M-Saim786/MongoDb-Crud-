'use client'
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Product from './Components/page';

function page() {


  return (
    <div>

      Main Page
      <Product />


    </div>
  )
}

export default page
