import React from 'react'
import {
  Infocontainer,
  Infowrap,
  Inforow,
  Column1,
  Column2,
  Textwrap,
  ColumnTop,
  Columnheader,
  Columnpara,
  Imgwrap,
  Img
} from './Infoelements'

const Infosection = ({lightbg,id,imgStart,topLine,headline,lightText,darkText,description,description2,img,alt,primary,dark,dark2, pageVisible, size,disp}) => {
  return (
    <>
    <Infocontainer pageVisible={pageVisible} lightbg={lightbg} id={id}>
      <Infowrap Disp={disp} Size={size}>
        <Inforow Disp={disp} imgStart={imgStart}>
          <Column1>
            <Textwrap>
              <ColumnTop>{topLine}</ColumnTop>
              <Columnheader lightText={lightText}>{headline}</Columnheader>
              <Columnpara darkText={darkText}>{description}</Columnpara>
              <Columnpara darkText={darkText}>{description2}</Columnpara>

            </Textwrap>
          </Column1>
          <Column2 Disp={disp} >
            <Imgwrap>
              <Img src={(img)} alt={alt}/>
            </Imgwrap>
          </Column2>
        </Inforow>
      </Infowrap>
      </Infocontainer>
    </>
  )
}

export default Infosection
