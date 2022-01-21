import React from "react";

import "./List.css";

export default function Box(props) {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className={`col_design ${props.boxColorD}`}>{props.img[1]}</div>
          <div className="title"> {props.content[1]}</div>
        </div>

        <div className="col">
          <div className={`col_design ${props.boxColorD}`}>{props.img[2]}</div>
          <div className="title"> {props.content[2]}</div>
        </div>

        <div className="col">
          <div className={`col_design ${props.boxColorD}`}>{props.img[3]}</div>
          <div className="title"> {props.content[3]}</div>
        </div>

        <div className="col">
          <div className={`col_design ${props.boxColorD}`}>{props.img[4]}</div>
          <div className="title"> {props.content[4]}</div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className={`col_design ${props.boxColorD}`}>{props.img[5]}</div>
          <div className="title"> {props.content[5]}</div>
        </div>

        <div className="col">
          <div className={`col_design ${props.boxColorD}`}>{props.img[6]}</div>
          <div className="title"> {props.content[6]}</div>
        </div>

        <div className="col">
          <div className={`col_design ${props.boxColorD}`}>{props.img[7]}</div>
          <div className="title"> {props.content[7]}</div>
        </div>

        <div className="col">
          <div className={`col_design ${props.boxColorD}`}>{props.img[8]}</div>
          <div className="title"> {props.content[8]}</div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className={`col_design ${props.boxColorD}`}>{props.img[9]}</div>
          <div className="title"> {props.content[9]}</div>
        </div>

        <div className="col">
          <div className={`col_design ${props.boxColorD}`}>{props.img[10]}</div>
          <div className="title"> {props.content[10]}</div>
        </div>

        <div className="col">
          <div className={`col_design ${props.boxColorD}`}>{props.img[11]}</div>
          <div className="title"> {props.content[11]}</div>
        </div>

        <div className="col">
          <div className={`col_design ${props.boxColorD}`}>{props.img[12]}</div>
          <div className="title"> {props.content[12]}</div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className={`col_design ${props.boxColorD}`}>{props.img[13]}</div>
          <div className="title"> {props.content[13]}</div>
        </div>

        <div className="col">
          <div className={`col_design ${props.boxColorD}`}>{props.img[14]}</div>
          <div className="title"> {props.content[14]}</div>
        </div>

        <div className="col">
          <div className={`col_design ${props.boxColorD}`}>{props.img[15]}</div>
          <div className="title"> {props.content[15]}</div>
        </div>

        <div className="col">
          <div className={`col_design ${props.boxColorD}`}>{props.img[16]}</div>
          <div className="title"> {props.content[16]}</div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className={`col_design ${props.boxColorD}`}>{props.img[17]}</div>
          <div className="title"> {props.content[17]}</div>
        </div>

        <div className="col">
          <div className={`col_design ${props.boxColorD}`}>{props.img[18]}</div>
          <div className="title"> {props.content[18]}</div>
        </div>

        <div className="col">
          <div className={`col_design ${props.boxColorD}`}>{props.img[19]}</div>
          <div className="title"> {props.content[19]}</div>
        </div>

        <div className="col">
          <div className={`col_design ${props.boxColorD}`}>{props.img[0]}</div>
          <div className="title"> {props.content[0]}</div>
        </div>
      </div>
    </>
  );
}
