import React, {  useState } from 'react'
import virus from '../assets/virus.png'
import Card from './Diseases/Card'


const Diseases = () => {
  const diseases = [{
    name: "AKIEC",
    title: "Actinic Keratoses and Intraepithelial Carcinomae",
    description: "Actinic keratoses (AKs) are precancerous skin lesions caused by prolonged sun exposure, appearing as rough, scaly patches mainly on sun-exposed areas. They can progress to skin cancer and are treated with various methods like freezing or topical creams.  Intraepithelial carcinomas, or squamous cell carcinoma in situ, are an early form of skin cancer limited to the top skin layer. They look similar to advanced AKs, occur in sun-exposed areas, and require removal through surgery or other treatments.  Both conditions highlight the importance of sun protection and early detection to prevent skin cancer. Consult a healthcare professional if you have concerning skin lesions.",
    imgUrl: "https://www.researchgate.net/profile/Virgil_Ptrascu/publication/234098699/figure/download/fig2/AS:667658290724879@1536193549673/a-Multiple-actinic-keratosis-of-the-face-severe-solar-damage-in-a-phototype-II.jpg"
  },
  {
    name: "BCC",
    title: "Basal Cell Carcinoma",
    description: " Basal Cell Carcinoma, is indeed the most common type of skin cancer. It typically grows slowly and tends to remain localized, meaning it doesn't usually spread to other parts of the body (metastasize). One of the primary risk factors for developing BCC is prolonged and excessive exposure to ultraviolet (UV) radiation from the sun or tanning beds. Therefore, sun protection measures such as wearing sunscreen, protective clothing, and avoiding excessive sun exposure are essential for reducing the risk of BCC and other skin cancers. Early detection and treatment are also crucial for managing BCC effectively.",
    imgUrl: "https://healthjade.com/wp-content/uploads/2018/01/Basal-cell-carcinoma-on-scalp.jpg"
  },
  {
    name: "BK1",
    title: "benign keratosis-like lesions",
    description: "Benign keratosis-like lesions are non-cancerous skin conditions that resemble keratosis, characterized by rough texture, scaling, or changes in skin appearance. These conditions include seborrheic keratosis, lichen planus, keratosis pilaris, sebaceous hyperplasia, and molluscum contagiosum. While these lesions are generally harmless, it's essential to consult a dermatologist for a proper diagnosis and evaluation to rule out any potential skin concerns.",
    imgUrl: "https://healthjade.com/wp-content/uploads/2018/03/seborrheic-keratosis-scalp-1024x683.jpg"
  },
  {
    name: "DF",
    title: "dermatofibroma",
    description: "A dermatofibroma is a common benign skin lesion that appears as a firm, raised nodule on the skin, typically brown or reddish-brown in color. These skin growths are usually small, painless, and may have a dimpled texture when pressed. They often develop in response to minor skin trauma. While dermatofibromas are generally harmless and don't require treatment, it's advisable to consult a dermatologist if you have any new or changing skin lesions for proper evaluation and to rule out potential skin concerns.",
    imgUrl: "https://th.bing.com/th/id/R.1312a3d43b0ea40c959d460775fcd9cb?rik=zCmUBZbp0gEIgw&riu=http%3a%2f%2fmddk.com%2fwp-content%2fuploads%2f2014%2f07%2fdermatofibroma-4.jpg&ehk=yBJ7g5uPecgasmKT31YSap%2fw%2b8Md%2fqnpeO6wNBkpANA%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    name: "NV",
    title: "melanocytic nevi",
    description: "Most melanocytic nevi are benign (non-cancerous) and pose no health risks. However, some moles can become atypical or dysplastic, which means they have an irregular appearance and may carry a slightly increased risk of developing into melanoma, a type of skin cancer. It's essential to monitor moles for changes and to have them checked by a dermatologist if you notice any concerning features or if they exhibit significant changes.Regular skin self-examinations and professional skin checks by a dermatologist are recommended to detect any potential skin abnormalities, including atypical moles, early in their development. Early detection and timely medical evaluation are crucial for skin health and cancer prevention.",
    imgUrl: "https://dermatologyoasis.net/wp-content/uploads/Congenital-melanocytic-nevus.jpg"
  },
  {
    name: "VASC",
    title: "pyogenic granulomas and hemorrhage",
    description: "A pyogenic granuloma is a non-cancerous skin growth that appears as a reddish or purplish bump on the skin. It can bleed easily when subjected to minor trauma. The term 'pyogenic' is misleading, as it does not indicate infection but rather an overgrowth of blood vessels in the skin. These growths can occur anywhere on the body, often develop in response to minor skin injury, and may require removal if they become painful, bleed excessively, or cause cosmetic concerns. While they can be alarming due to bleeding, pyogenic granulomas are generally harmless. Any changing or concerning skin growth should be evaluated by a healthcare professional.",
    imgUrl: "https://th.bing.com/th/id/OIP.nmnFjHKj5HKCacYlCY7sCwHaFC?pid=ImgDet&rs=1"
  },
  {
    name: "MEL",
    title: "Melanoma",
    description: "Melanoma is a serious form of skin cancer that originates from melanocytes, the cells responsible for skin pigment. It often appears as an irregularly shaped and pigmented skin lesion with asymmetrical borders and can change in size, shape, or color over time. Risk factors include sun exposure, fair skin, family history, and the presence of atypical moles. Early detection and treatment are crucial for a favorable prognosis. Treatment options depend on the cancer's stage and may involve surgery, immunotherapy, targeted therapy, radiation, or chemotherapy. Preventive measures include sun protection and regular skin examinations. Melanoma is highly treatable when caught early but can be life-threatening if advanced.",
    imgUrl: "https://cdn.britannica.com/91/148191-050-9EC7373F/Melanoma.jpg"
  }];
  const [activeCard, setActiveCard] = useState(0);
  const handleButtonClick = (index) => {
    setActiveCard(index);
  };
 

  return (
    <div >

      <h1 class="text-5xl font-bold mt-5 text-center">Skin Diseases</h1>
      <p class="text-xl text-center mt-4 ">Few of the common skin diseases are described below </p>
      <div>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            
          </div>
          <div className="drawer-side z-50">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
              <span class="flex flex-row my-4 "> <img class="w-16 h-16 mr-4" src={virus}></img> <li class="text-4xl my-8 mt-3 font-bold  ">Diseases</li></span>
              <hr />
              {diseases.map((diseases, index) => (
                <button class="bg-green-200 my-2 p-3 rounded-xl text-start" key={index} onClick={() => handleButtonClick(index)}>
                  {diseases.name}
                </button>
              ))}
              <hr />
            </ul>
          </div>
        </div>
      </div>

      <div class="justify-center ">
        <div class=" my-3  flex flex-col">
          <p>{
            <div>
              <Card title={diseases[activeCard].title} description={diseases[activeCard].description} imgUrl={diseases[activeCard].imgUrl} />
            </div>
          }
          </p>
          <div class="mx-auto mt-8 mb-10">
            <label htmlFor="my-drawer" className="btn btn-primary drawer-button " >Tap to see More</label>
          </div> 
        </div>
      </div>
    </div>

  )
}

export default Diseases

