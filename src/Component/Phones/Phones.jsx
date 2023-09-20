import axios from 'axios';
import  { useEffect, useState } from 'react';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phones = () => {
          const [phones, setPhones]=useState([]);
          useEffect(()=>{
                    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
                    // .then(res => res.json())
                    // .then(data => setPhones(data.data))
                    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
                    .then (data => {
                              const PhoneData=data.data.data;
                              const phoneFakeData= PhoneData.map(phone => {
                                   const obj=  {
                                        name:phone.phone_name,
                                        price: parseInt(phone.slug.split('-')[1])
                                   }
                                   return obj;   
                              })
                              console.log(phoneFakeData);
                              setPhones(phoneFakeData);
                    })
          },[])
          return (
                    <div>
                          <h2 className='text-3xl font-bold'>Phones:{phones.length}</h2>    
                          <BarChart width={1800} height={400} data={phones}>
                              <XAxis dataKey={'name'}></XAxis>
                              <YAxis dataKey={'price'}></YAxis>
                              <Tooltip></Tooltip>
                              
                              <Bar dataKey="price" fill="#8884d8" />
                              </BarChart>
                    </div>
          );
};

export default Phones;