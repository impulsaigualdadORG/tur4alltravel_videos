import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {beats} from '../data/script';
/** Previsualización técnica de bloques: NO es el montaje creativo definitivo. */
export const Video01: React.FC = () => {
 const frame=useCurrentFrame(); const {fps}=useVideoConfig(); const t=frame/fps;
 const beat=beats.find(b=>t>=b.start && t<b.end) ?? beats[beats.length-1];
 return <AbsoluteFill style={{backgroundColor:'#ffffff',color:'#006D55',justifyContent:'center',alignItems:'center',padding:90,boxSizing:'border-box',fontFamily:'sans-serif',textAlign:'center'}}>
  <div style={{fontSize:30,letterSpacing:3,marginBottom:60}}>TUR4all Travel · PRUEBA TÉCNICA</div>
  <div style={{fontSize:86,fontWeight:800,lineHeight:1.1}}>{beat.label}</div>
  <div style={{position:'absolute',bottom:120,fontSize:26,color:'#555'}}>Escena documental · {beat.start.toFixed(2)}–{beat.end.toFixed(2)} s · sin audio ni subtítulos</div>
 </AbsoluteFill>;
};
