import styled from 'styled-components';


export const Infocontainer = styled.div`
display:${({pageVisible}) => (pageVisible ? 'flex':'none')};
color:lightyellow;
justify-content:center;
// background:${({lightbg}) => (lightbg ? 'lightyellow' :'#EEE198')};
// background:${({lightbg}) => (lightbg ? '#F7A8B8' :'#EEE198')};

`
export const Infowrap = styled.div`
display: ${({Disp}) => (Disp ? 'grid':'flex')};
flex: 1 1 0;
z-index:1;
height:${({Size}) => (Size ? '87vh' : '20vh')};
max-width:1100px;
margin-right:auto;
margin-left:auto;
padding: 24px 24px 0;
justify-content:center;
`
export const Inforow = styled.div`
display: ${({Disp}) => (Disp ? 'grid':'flex')};
grid-auto-columns:minmax(auto,1fr);
align-items:center;
grid-template-areas:${({imgStart}) => imgStart ? `'col2 col1'`:`'col1 col2'`  };
@media screen and (max-width:768px){
   grid-template-areas:${({imgStart}) => imgStart ? `'col1 'col2''`:`'col1 col1' 'col2 col2'`  };
}
`
export const Column1 = styled.div`
margin-bottom:15px;
padding:0px 15px;
grid-area:col1;

`
export const Column2 = styled.div`
  margin-bottom:15px;
  padding:0 15px;
  grid-area:col2;
  display: ${({Disp}) => (Disp ? 'grid':'none')};

`
export const Textwrap = styled.div`
  max-width:540px;
  padding-top:0;
  padding-bottom:0px;
`
export const ColumnTop = styled.p`
  color:grey;
  font-size:32px;
  // line-height:16px;
  font-weight:700;
  letter-spacing:1.4px;
  text-transform:uppercase;
  // margin-bottom:16px;
  @media screen and (max-width:768px){
    font-size:24px;
  }

`
export const Columnheader = styled.h1`
  margin-bottom:24px;
  font-size:26px;
  line-height:1.1;
  font-weight:600;
  color:${({lightText}) => (lightText ? 'white':'dimgrey')};

  @media screen and (max-width:768px){
    font-size:18px;
  }

`
export const Columnpara = styled.p`
max-width:440px;
// margin-bottom:35px;
font-size:18px;
line-height:24px;
color:${({darkText})=>(darkText ?'dimgrey':'darkblue')}
`
export const Btnwrap = styled.div`
  display:flex;
  justify-content:flex-start;
`
export const Imgwrap = styled.div`
max-width:555px;
height:100%;
`
export const Img=styled.img`
  // width:100%
  // marging 0 0 10px 0;
  left:300px;
  position:static;
  // padding-right:0;
  max-width:60vh;
    width:50vw;
`
