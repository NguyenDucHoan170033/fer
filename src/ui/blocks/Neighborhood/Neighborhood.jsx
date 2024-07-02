import React from "react";
import styled from "styled-components";
import { NeighborhoodWrapper } from "./NeighborhoodStyled";
import { Container } from "../../base/Container";
import 'bootstrap/dist/css/bootstrap.min.css';



const Neighborhood = () => {
  return (
    <NeighborhoodWrapper>
      <Container>
      <h1 style={{ marginTop: '7rem', textAlign: 'center' }}>HOW CAN WE HELP YOU TODAY?</h1>
        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <h3 className="heloise-title">HOW-TO CHANGE YOUR LEATHER WATCH STRAP?</h3>
            <div className="pagebuilder-video-container">
              <iframe
                className="w-100"
                height="200"
                frameBorder="0"
                allowFullScreen
                src="https://www.youtube.com/embed/Gu77H0OE6Os?enablejsapi=1&origin=https%3A%2F%2Fwww.hamiltonwatch.com"
                title="How to change your leather watch strap | Hamilton Watch"
              ></iframe>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <h3 className="heloise-title">HOW-TO CHANGE YOUR NATO WATCH STRAP?</h3>
            <div className="pagebuilder-video-container">
              <iframe
                className="w-100"
                height="200"
                frameBorder="0"
                allowFullScreen
                src="https://www.youtube.com/embed/hOrOUmWeluU?enablejsapi=1&origin=https%3A%2F%2Fwww.hamiltonwatch.com"
                title="How to change your NATO watch strap | Hamilton Watch"
              ></iframe>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <h3 className="heloise-title">HOW-TO CALCULATE WITH YOUR PILOT WATCH?</h3>
            <div className="pagebuilder-video-container">
              <iframe
                className="w-100"
                height="200"
                frameBorder="0"
                allowFullScreen
                src="https://www.youtube.com/embed/b2_PbeUuwdM?enablejsapi=1&origin=https%3A%2F%2Fwww.hamiltonwatch.com"
                title="How to calculate critical conversions with your pilot watch | Hamilton Watch"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </NeighborhoodWrapper>
  );
};

export default Neighborhood;
