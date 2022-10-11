import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CompletedList = () => {

    const [CompletedOrders, setCompletedOrders] = useState([])

    useEffect(() => {
        
        async function fetchData() {
            const res = await axios.get("/order/getCompletedOrders")
            setCompletedOrders(res.data.completedOrdes)
        }
        fetchData()
        
    }, [])
    
    return (
        <div className=" pt-16 pl-60 pr-60 pb-20">
            {CompletedOrders.map((data)=>{return(
            <div className="bg-white rounded-xl shadow-xl p-10 mb-7" >
                <div className="grid grid-cols-3 divide-x divide-light-blue">
                    <div className="ml-16">
                      <span className="font-semibold" style={{color:"#008F8C", fontSize:"20px"}}>Name</span>
                        <span className="ml-10">{data.CustomerName}</span>
                        <br/>
                        <span className="font-semibold" style={{color:"#008F8C", fontSize:"20px"}}>Date</span>
                        <span className="ml-12">{data.StartDate}</span>
                        <br/>
                        <span className="font-semibold" style={{color:"#008F8C", fontSize:"20px"}}>Time</span>
                        <span className="ml-12">{data.StartTime}</span>
                    </div>
                    <div className="relative">
                        <div className="text-center">
                        <span className="font-semibold" style={{color:"#008F8C", fontSize:"20px"}}>Cloths</span>
                        <span className="ml-20 font-semibold" style={{color:"#008F8C", fontSize:"20px"}}>Quantity</span>
                        </div >
                        <div className="overflow-y-auto h-16">
                        {data.items.map((id)=>{return(
                            <div>
                                <span className="ml-20">{id.pack.name}t</span>
                                <span className="absolute right-32">{id.quantity}</span>
                            </div>
                        )})}
                        </div>
                    </div>
                    <div >
                        <div className="ml-16">
                        <span className="font-semibold" style={{color:"#008F8C", fontSize:"20px"}}>Started Date</span>
                        <span className="ml-14">{data.StartDate}</span>
                        <br/>
                        <span className="font-semibold" style={{color:"#008F8C", fontSize:"20px"}}>Started Time</span>
                        <span className=" ml-14">2:00pm</span>
                        <br/>
                        <span className="font-semibold" style={{color:"#008F8C", fontSize:"20px"}}>Completed Date</span>
                        <span className="ml-8">{data.CompletedDate}</span>
                        <br/>
                        <span className="font-semibold" style={{color:"#008F8C", fontSize:"20px"}}>Completed Time</span>
                        <span className="ml-8">{data.CompletedTime}</span>
                        
                        </div>
                    </div>
                </div>
            </div>
             );})}
        </div>
    )
}

export default CompletedList
