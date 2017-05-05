/* eslint-disable */
import React, { Component } from 'react';
import Randvatar from "./Randvatar.js";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardActions from "react-md/lib/Cards/CardActions";
import CardText from "react-md/lib/Cards/CardText";
import Paper from 'react-md/lib/Papers';
import {GetNameFromAddr, GetAddrFromName, GetProofFromAddr} from "./ContractUtils.js";
/* eslint-enable */



export default class Showcard extends Component {
	constructor(props){
		super(props);
		let addr = props.addr?props.addr:GetAddrFromName(props.name);
		let name = props.name?props.name:GetNameFromAddr(props.addr);
		let proof = props.proof?props.proof:GetProofFromAddr(addr);
		this.state = {
			addr: addr,
			name: name,
			proof: proof
		};
	}
	render() {
		return (
			<Card className="md-block-centered infocard"> 
				<CardTitle title="">
					<Randvatar reddit={this.state.name} style={{margin: "auto"}}/>
				</CardTitle> 
				<CardText style={{textAlign: "center"}}> 
					<div className="infofield"> You are <Paper zDepth={2} className="SolidPaper"> {this.state.addr} </Paper> </div>
					<div className="infofield"> Your Reddit username is<Paper zDepth={2} className="SolidPaper"> {this.state.name} </Paper> </div>
					<div className="infofield"> Your Proof of Reddit is posted at <Paper zDepth={2} className="SolidPaper"> {this.state.proof} </Paper> </div>
				</CardText>
			</Card>
		);
	}
}