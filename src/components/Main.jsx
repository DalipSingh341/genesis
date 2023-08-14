import React from 'react'
import { Col, Row } from 'react-bootstrap'
import left1 from "../assets/img/png/left1.png"
import left2 from "../assets/img/png/left2.png"
import left3 from "../assets/img/png/left3.png"
import left4 from "../assets/img/png/left4.png"
import left5 from "../assets/img/png/left5.png"
import left6 from "../assets/img/png/left6.png"
import left7 from "../assets/img/png/left7.png"
import left8 from "../assets/img/png/left8.png"
import left9 from "../assets/img/png/left9.png"
import left10 from "../assets/img/png/left10.png"
import left11 from "../assets/img/png/left11.png"
import left12 from "../assets/img/png/left12.png"
import left13 from "../assets/img/png/left13.png"
import left14 from "../assets/img/png/left14.png"
import left15 from "../assets/img/png/left15.png"
import left16 from "../assets/img/png/left16.png"
import left17 from "../assets/img/png/left17.png"
import right1 from "../assets/img/png/right1.png"
import right2 from "../assets/img/png/right2.png"
import right3 from "../assets/img/png/right3.png"
import right4 from "../assets/img/png/right4.png"
import right5 from "../assets/img/png/right5.png"
import right6 from "../assets/img/png/right6.png"
import right7 from "../assets/img/png/right7.png"
import right8 from "../assets/img/png/right8.png"
import right9 from "../assets/img/png/right9.png"
import right10 from "../assets/img/png/right10.png"
import right11 from "../assets/img/png/right11.png"
import right12 from "../assets/img/png/right12.png"
import right13 from "../assets/img/png/right13.png"
import right14 from "../assets/img/png/right14.png"
import right15 from "../assets/img/png/right15.png"
import right16 from "../assets/img/png/right16.png"
import right17 from "../assets/img/png/right17.png"
import right18 from "../assets/img/png/right18.png"
import NavBar from '../components/NavBar'

const Main = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="py-5 position-relative">
        <div className="d-none d-xl-block center_line"></div>
        <Row className="mx-2 py-5 ">
          <Col xl={6}>
            <div className="d-grid ">
              
                <img className="d-md-none w-100" src={left1} alt="left1" />
              <div className="left_grid1">
                <img className="text-end w-100 d-none d-md-block" src={left1} alt="left1" />
              </div>
              <h2 className="left_grid2 my-3">MANY YEARS BEFORE LAPiNC</h2>
            </div>
            <div className="d-grid my-3">
              <img className="left_grid3 " src={left2} alt="left2" />
              <div className="left_grid4 text-end">
                <img
                  className="mb-5 d-none ms-5 d-md-block"
                  src={left3}
                  alt="left3"
                />
                <img
                  className="mt-5 mb-4 d-none d-md-block"
                  src={left4}
                  alt="left4"
                />
              </div>
              <img className="left_grid5 d-none d-sm-block ms-5 w-75" src={left5} alt="left5" />
              <img className=" ms-5 d-sm-none w-75" src={left5} alt="left5" />
              <img
                className="w-100 mt-5 pt-4 left_grid6"
                src={left6}
                alt="left6"
              />
              <img className="w-50 mt-3 d-none d-md-block left_grid7" src={left7} alt="left7" />
            </div>
            <div className="pb-5">
              <img className="w-100 px-5" src={left8} alt="left8" />
            </div>
            <div className="text-end left_grid4a">
              <img className="w-50 " src={left9} alt="left9" />
            </div>
            <div className="py-5">
              <img className="w-100 ms-1 ps-5 pe-3" src={left10} alt="left10" />
            </div>
            <div className="d-grid">
              <img className="left_grid8 w-100" src={left11} alt="left11" />
              <img
                className="left_grid9 w-75 ps-3 ms-5"
                src={left12}
                alt="left12"
              />
              <img
                className="left_grid10 w-100 ps-3 "
                src={left13}
                alt="left13"
              />
            </div>
            <div className="text-end my-5">
              <img className="w-75 left_grid4b" src={left14} alt="left14" />
            </div>
            <div className="d-grid">
              <img
                className="w-100 left_grid11 mx-1 pe-2"
                src={left15}
                alt="left15"
              />
              <img className="w-100 left_grid12" src={left16} alt="left16" />
              <img
                className="w-100 left_grid13 py-5 px-5"
                src={left17}
                alt="left17"
              />
            </div>
          </Col>
          <Col xl={6} className="px-5">
            <div className="d-flex align-itens-center pt-4">
              <img className="right_grid1" src={right1} alt="right1" />
              <h2 className="text-center">
                THIS ARTIST DUO WERE FORMALLY KNOWN AS LVSP
              </h2>
            </div>
            <div className="d-grid pb-5">
              <img
                className="right_grid3 w-100 pt-5 px-3 my-5"
                src={right2}
                alt="right2"
              />
              <img
                className="right_grid4 w-100 mt-4 px-3"
                src={right3}
                alt="right3"
              />
              <img
                className="right_grid5 w-100 mt-4 px-2"
                src={right4}
                alt="right4"
              />
              <img
                className="right_grid6 w-100 mt-4  ps-4 pe-3"
                src={right5}
                alt="right5"
              />
              <div className="right_grid7">
                <img className=" w-100 mt-5" src={right6} alt="right6" />
                <img
                  className=" w-100 mt-5 right_grid7a "
                  src={right8}
                  alt="right8"
                />
              </div>
              <img
                className="right_grid8 w-100 mx-2 mt-4 px-4"
                src={right7}
                alt="right7"
              />
              <img
                className="right_grid9 w-100 me-2 mt-4 pe-4"
                src={right9}
                alt="right9"
              />
              <img
                className="right_grid10 w-100 "
                src={right10}
                alt="right10"
              />
            </div>
            <div className=" mt-5 pt-5">
              <img className="w-100 pe-5" src={right11} alt="right11" />
            </div>
            <div className=" pt-5">
              <img className="w-100 ps-5" src={right12} alt="right12" />
            </div>
            <div className="d-grid mt-5">
              <img
                className="right_grid11 w-100 pt-3"
                src={right13}
                alt="right13"
              />
              <img
                className="right_grid12 w-100 my-5 pt-5"
                src={right14}
                alt="right14"
              />
              <img
                className="right_grid13 w-100  mx-4"
                src={right15}
                alt="right15"
              />
            </div>
            <div className="d-grid">
              <img
                className="right_grid14 w-100 pt-5 px-3"
                src={right16}
                alt="right16"
              />
              <img
                className="right_grid15 w-100 pt-5 px-3"
                src={right18}
                alt="right18"
              />
              <img
                className="right_grid16 w-100 pt-5"
                src={right17}
                alt="right17"
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Main
