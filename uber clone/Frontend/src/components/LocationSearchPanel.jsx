import React from 'react'

const LocationSearchPanel = () => {

    const locations=[
        "248,Near Kapoor's Cafe , Sheriyans coding school,Bhopal",
        "24A,Near Malhotra's Cafe , Sheriyans coding school,Bhopal",
        "24c,Near Singhania's Cafe , Sheriyans coding school,Bhopal",
        "24B,Near Oberoi's Cafe , Sheriyans coding school,Bhopal"
    ]

    return (
        <div>
          {
            locations.map(function(elem, index) {
              return (
                <div key={index} className='flex gap-4 border-2 border-white active:border-black rounded-xl items-center my-2 justify-start'>
                  <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
                    <i className='ri-map-pin-fill'></i>
                  </h2>
                  <h4 className='font-medium'>{elem}</h4>
                </div>
              );
            })
          }
        </div>
      );
      
}

export default LocationSearchPanel
