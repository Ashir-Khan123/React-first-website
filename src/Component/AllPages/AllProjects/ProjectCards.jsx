import React from 'react'
import background from '../../../assets/Top-Blue-Image.png'
import cardImgOne from '../../../assets/project-pic-1.png'
import cardImgTwo from '../../../assets/project-pic-2.jpg'
import cardImgThree from '../../../assets/project-pic-3.png'
import cardImgFour from '../../../assets/project-pic-4.png'
import cardStarOne from '../../../assets/star-1-2.png'
import cardStarTwo from '../../../assets/star-3-4.png'

export const ProjectCards = () => {
  const projectCards = [
    {
      cardImage : cardImgOne,
      cardName : "Decentraland",
      cardRating : "3.94 / 5",
      cardVotes : "Based on 16 votes",
      cardStar : cardStarOne,
      cardDescription : `Decentraland is a 3D virtual world browser-based platform.
                    Users may buy virtual plots of land in the platform as NFTs
                    via the MANA cryptocurrency, which uses the Ethereum
                    blockchain. Designers can create and sell clothes and
                    accessories for the avatars to be used in the virtual world.` ,
      indicator: "Show less",
    },
    {
      cardImage : cardImgTwo,
      cardName : "House of Degenarates",
      cardRating : "3.94 / 5",
      cardVotes : "Based on 19 votes",
      cardStar : cardStarOne,
      cardDescription : `Buckle up, fellow degens, because the House of Degenerates ($HOD) is here to redefine the Web3 experience! Embark on the Ultimate Gaming Odyssey...`,
      indicator: "Learn more",
    },
    {
      cardImage : cardImgThree,
      cardName : "Axie Infinity",
      cardRating : "3.44 / 5",
      cardVotes : "Based on 16 votes",
      cardStar : cardStarTwo,
      cardDescription : `Axie Infinity is a non-fungible token-based online video game developed by Vietnamese studio Sky Mavis, known for its in-game economy which uses...`,
      indicator: "Learn more",
    },
    {
      cardImage : cardImgFour,
      cardName : "EVCoin",
      cardRating : "3.65 / 5",
      cardVotes : "Based on 31 votes",
      cardStar : cardStarTwo,
      cardDescription : `EverestCoin's Play to Earn Game, PeakXV is changing the way blockchain games are played, by bringing fun into the picture. Earn while you play, but...`,
      indicator: "Learn more",
    },
  ]
  return (
    <div style={{ backgroundImage: `url(${background})` }} className='bg-[#0B0E12] text-white py-10 pt-20 bg-cover bg-center'>
      <div className='flex justify-center text-4xl font-semibold capitalize'>
        <h3>All projects</h3>
      </div>
      <div className='py-12'>
      <div className='flex flex-col items-center gap-7'>
        {projectCards.map((v) => {
          return(
            <div className='bg-[#10171E] flex flex-col md:items-start md:flex-row min-[1030px]:w-[60%] md:gap-4 gap-2 min-[1024px]:w-[70%] w-[90%] rounded-2xl sm:p-7 py-5 px-2'>
              <div className='flex justify-center lg:justify-start md:items-center'>
                  <img src={v.cardImage} alt="" className='md:w-full sm:w-[40%] w-[30%]'/>
              </div>
              <div className='text-center md:text-start'>
                  <div className='text-sm'>
                    <h2 className='text-[#E2E6E7] font-semibold sm:text-2xl text-lg'>{v.cardName}</h2>
                    <p className='text-[#E2E6E7] font-semibold'>{v.cardRating}</p>
                    <p className='text-[#A7B5C3]'>{v.cardVotes}</p>
                    <div className='flex justify-center md:justify-start'>
                      <img src={v.cardStar} alt=""/>
                    </div>
                  </div>
                  <div className='pt-3 text-[#A7B5C3]'>
                    <p className='text-[12px] sm:text-sm'>
                      {v.cardDescription}
                    </p>
                  </div>
                  <div className='text-[#335DD2] py-2'>
                    <span>
                      {v.indicator} &gt;
                    </span>
                    <span className='pl-4 text-sm'>
                      Go to Website &gt;
                    </span>
                  </div>
              </div>
        </div>
          )
        })}
      </div>
      </div>
    </div>
  )
}

export default ProjectCards