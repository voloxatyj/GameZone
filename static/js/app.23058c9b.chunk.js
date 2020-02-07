(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{287:function(e,t,n){"use strict";var a=n(30),r=n.n(a),o=n(0),i=n.n(o),l=n(10),c=n.n(l),A=n(24),g=n.n(A),s=n(9),u=n(8),d=n(29),m=n(126),h=n(90),f=n(271),p=n(92),b=n(123),v=s.a.create({titleText:{fontSize:18,fontWeight:"bold",color:"#333"},paragraph:{marginVertical:8,lineHeight:20},container:{flex:1,padding:20},input:{borderWidth:1,borderColor:"#ddd",padding:10,fontSize:18,borderRadius:6},errorText:{color:"crimson",fontWeight:"bold",marginBottom:10,marginTop:6,textAlign:"center"}}),y={ratings:{1:n(317),2:n(318),3:n(319),4:n(320),5:n(321)}};function E(e){return i.a.createElement(u.a,{style:C.card},i.a.createElement(u.a,{style:C.cardContent},e.children))}var C=s.a.create({card:{borderRadius:6,elevation:3,backgroundColor:"#fff",shadowOffset:{width:1,height:1},shadowColor:"#333",shadowOpacity:.3,shadowRadius:2,marginHorizontal:4,marginVertical:6},cardContent:{marginHorizontal:18,marginVertical:10}}),w=n(479),O=n(42),B=n(288),R=n(159);function S(e){var t=e.text,n=e.onPress;return i.a.createElement(h.a,{onPress:n},i.a.createElement(u.a,{style:k.button},i.a.createElement(d.a,{style:k.buttonText},t)))}var k=s.a.create({button:{borderRadius:8,paddingVertical:14,paddingHorizontal:10,backgroundColor:"#dc1324"},buttonText:{color:"white",fontWeight:"bold",textTransform:"uppercase",fontSize:16,textAlign:"center"}}),D=R.a({title:R.b().required().min(4),body:R.b().required().min(8),rating:R.b().required().test("numerics","Must be a nuber from 1-5",(function(e){return parseInt(e)>0&&parseInt(e)<6}))});function Q(e){var t=e.addReviewForm;return i.a.createElement(u.a,{style:v.container},i.a.createElement(B.a,{initialValues:{title:"",body:"",rating:""},validationSchema:D,onSubmit:function(e,n){n.resetForm(),t(e)}},(function(e){return i.a.createElement(u.a,null,i.a.createElement(O.a,{minHeight:60,style:v.input,value:e.values.title,placeholder:"Review title",onChangeText:e.handleChange("title"),onBlur:e.handleBlur("title")}),i.a.createElement(d.a,{style:v.errorText},e.touched.title&&e.errors.title),i.a.createElement(O.a,{multiline:!0,minHeight:60,style:v.input,value:e.values.body,placeholder:"Review body",onChangeText:e.handleChange("body"),onBlur:e.handleBlur("body")}),i.a.createElement(d.a,{style:v.errorText},e.touched.body&&e.errors.body),i.a.createElement(O.a,{minHeight:60,style:v.input,value:e.values.rating,placeholder:"Rating 1-5",onChangeText:e.handleChange("rating"),keyboardType:"numeric",onBlur:e.handleBlur("rating")}),i.a.createElement(d.a,{style:v.errorText},e.touched.rating&&e.errors.rating),i.a.createElement(S,{text:"submit",onPress:e.handleSubmit}))})))}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var V=s.a.create({modalContent:{flex:1},modalToggle:{marginBottom:10,borderWidth:1,borderColor:"#f2f2f2",padding:10,borderRadius:10,alignSelf:"center"},modalClose:{marginTop:20,marginBottom:0}}),I=n(131),P=n(477),F=n(286),U=n(22),Y=n(478),j=n(55);var H=s.a.create({rating:{flexDirection:"row",justifyContent:"center",paddingTop:16,marginTop:16,borderTopWidth:1,borderTopColor:"#eee"}}),T=n(281);function G(e){var t=e.title,a=e.navigation;return i.a.createElement(T.a,{source:n(443),style:z.header},i.a.createElement(w.a,{name:"videogame-asset",size:28,onPress:function(){a.openDrawer()},style:z.icon}),i.a.createElement(u.a,{style:z.headerTitle},i.a.createElement(j.a,{source:n(444),style:z.headerImage}),i.a.createElement(d.a,{style:z.headerText},t)))}var z=s.a.create({header:{width:"100%",height:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-around"},headerText:{fontWeight:"bold",fontSize:20,color:"#333",letterSpacing:1},icon:{position:"absolute",left:50},headerTitle:{flexDirection:"row"},headerImage:{width:26,height:26,marginHorizontal:10,marginRight:10}}),L={Home:{screen:function(e){var t=e.navigation,n=Object(o.useState)(!1),a=r()(n,2),l=a[0],c=a[1],A=Object(o.useState)([{title:"Zelda, Breath of Fresh Air",rating:5,body:"loremipsum",key:"1"},{title:"Gotta Catch Tham All (again)",rating:4,body:"lorem ipsum",key:"2"},{title:'Not So "Final" Fantasy',rating:3,body:"lorem ipsum",key:"3"}]),s=r()(A,2),y=s[0],C=s[1];return i.a.createElement(u.a,{style:v.container},i.a.createElement(f.a,{visible:l,animationType:"slide"},i.a.createElement(b.a,{onPress:p.a.dismiss},i.a.createElement(u.a,{style:V.modalContent},i.a.createElement(w.a,{name:"close",style:N({},V.modalToggle,{},V.modalClose),size:24,onPress:function(){return c(!1)}}),i.a.createElement(Q,{addReviewForm:function(e){e.key=Math.random().toString(),C((function(t){return[e].concat(g()(t))})),c(!1)}})))),i.a.createElement(w.a,{name:"add",size:24,style:V.modalToggle,onPress:function(){return c(!0)}}),i.a.createElement(m.a,{data:y,renderItem:function(e){var n=e.item;return i.a.createElement(h.a,{onPress:function(){return t.navigate("ReviewDetails",n)}},i.a.createElement(E,null,i.a.createElement(d.a,{style:v.titleText},n.title)))}}))},navigationOptions:function(e){var t=e.navigation;return{headerTitle:function(){return i.a.createElement(G,{title:"GameZone",navigation:t})}}}},ReviewDetails:{screen:function(e){var t=e.navigation,n=t.getParam("rating");return i.a.createElement(u.a,{style:v.container},i.a.createElement(E,null,i.a.createElement(d.a,{style:v.titleText},t.getParam("title")),i.a.createElement(d.a,null,t.getParam("body")),i.a.createElement(u.a,{style:H.rating},i.a.createElement(d.a,null,"GameZone rating: "),i.a.createElement(j.a,{source:y.ratings[n]}))))},navigationOptions:{title:"ReviewDetails"}}},M=Object(Y.a)(L,{defaultNavigationOptions:{headerTintColor:"#444",headerStyle:{backgroundColor:"#eee",height:120},headerTitleAlign:"center"}});var W={About:{screen:function(){return i.a.createElement(u.a,{style:v.container},i.a.createElement(d.a,null,"About Screen"))},navigationOptions:function(e){var t=e.navigation;return{headerTitle:function(){return i.a.createElement(G,{title:"GameZone",navigation:t})}}}}},Z=Object(Y.a)(W,{defaultNavigationOptions:{headerTintColor:"#444",headerStyle:{backgroundColor:"#eee",height:120},headerTitleAlign:"center"}}),K=Object(F.a)({Home:{screen:M},About:{screen:Z}}),q=Object(U.createAppContainer)(K);n.d(t,"a",(function(){return X}));var J=function(){return I.b({nunitoRegular:n(454),nunitoBold:n(455)})};function X(){var e=Object(o.useState)(!1),t=r()(e,2),n=t[0],a=t[1];return n?i.a.createElement(q,null):i.a.createElement(P.a,{startAsync:J,onFinish:a(!0)})}},293:function(e,t,n){n(294),e.exports=n(460)},294:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/GameZone/expo-service-worker.js",{scope:"/GameZone/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},317:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAABHNCSVQICAgIfAhkiAAAAb1JREFUOI3tkk9IFGEUwH/ffPPNuO4q2ZKX/rCQoWGXTtGlSwiVgVCCHj176BZl4MlTl46eg257CfRiGEgs4i0SiegS5mJBa65iOjvMtK/D7NAy49pqV3/w+ODxvR/v8R6c0oQFFLLwPgvlOFzoA3ChLwef43wGVh0YbNS1pHAOll5a1F5rJI7zUAQ6LkKxqAni/LRt+71QAi63FPbD2kcb2Rvsl/r6uoRvFsQzyFtNcAY2Fi2CfRvxTBTfDfLKceQSfCLqOMWVq/DD6z0r4fyc1A/2pTZyXzyDbNnInI7eWOgZZMcgix2uFJT6CVyPRXZK7TrQ04N/bQA2NwHIKhhS/1rHX9LSapXw2VMol9u3JEhvzfeRleUTC5PSDQsmH4WwLe0VrynNbBByIPIc+NrqX6Yb7tyFSvNCkrFrkJJr5KZS2zl4AHQ2S3RCGvrwrQbBF2HohoLMIQtaVZoXv4UP9frMTnTDv9qZrNOF4YeKreQJlVwjtyxVzcAokG1H1oy5AI8nFFJu3Oc7R8uw1pKHJ8mRj0MOGBlVVJZcI7ctq+LA2Ek6TJGHqXta1/IwBZj/FjboAsaJOj/laP4A/yizQmhzA3cAAAAASUVORK5CYII="},318:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAVCAYAAADFEfeTAAAABHNCSVQICAgIfAhkiAAAAd5JREFUSIntlD1oFEEUgL/Z2dnN5U4xHqbxhwMjUWJjFWxsJKBGCGhAy9QWdqIRrKxsLK0Fu2uE2BgiBDnETgxBxEZijih4MRcxyd6y6z2LzYpedtXghCDmg8cwA/Px3sybgR3+AxygUoQXRain4UMfgA99JXiTrhdgxoOB9X02HZlU9sH0fYfWQ42ksR+qQNdBqFY1Ubp+y3XDXqgBhy07NibWD7OvXOTLQL+05+YknnwsgUGeaKI9MD/lEK26SGCS+GCQB54nh+A1SfU2HJkcOQYfg969Ej+akPbaqrRGzktgkEUXmdDJmEoDgywbZKrLl4pSn4ATlhzfcTek6HvQ00N4/CgsLABQVDCkftcRlh2ZyTWbxDdvQL2+OZNtB1kvJAyR58/+SmrFwc/JzTtw5WoMS/Jnm2eV5l4UsyZyB3hnyZFLYTecOQuNH5u2Mz4bpOYbOanUUgkuAN2WHQDojnkcwvsWRG+FoUEFhYwmnlGau1+Fl+327eXk/1qx7Pgl3T4MX1Qsdj77mm/klKOaBRgFilvsyMUcgGtjCqmv/01PPS3DWksZrpNxDVvkyKUEjIwqGtO+kdOO0/DgEpur1oYjnzKMn9O6VYZxwGyXI49dwGWSU9hOxw7/Pt8AjaBmg5jCnqQAAAAASUVORK5CYII="},319:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAVCAYAAADiv3Z7AAAABHNCSVQICAgIfAhkiAAAAtRJREFUWIXtll2ITGEYx3/vOeedsavNR7t2fexHbdsi2t2sz7ZVe7G5oBAp9y6IkhI3K9yQ3Ai1CIU0krLJlXwkjFCLiEFtFvmYj2yLMzPrzOOCaWd2zZhmj92b+dfbqeec/6/nf55zznugoIIKGkt5S6ClDl7VQzi5SqAFUJOgpR7eJ+uV8GY8tANelxlFM2Bzqr8GDgFTgYpqOJisV0O4FLYDxf8KN6cc5LWF2HpwVUEPML4KeoIp5y56PVKhlACNLjNaV6p0f4eBACeAozuMwfo9r5Y20xSgLVuw2pnQ87FIi71qhSQiERk4d0ZsjXSbOEugr9vE+ZHSWEgjl70eqVbqHdDgEmPJfAgHp0yW2OaN4gQCEt/dIRELOWkQO2YQC6f4v2nktkfLTKX6gNWZwtXNgi92ZYU4vb3ivHwh9rSytLs3dH3VyLVxXqlRKgw0ucRoXQDR2Pp1krBtie/ZldVva+ShV8tspQaAdamBjGER4wM4V7qIL2qGYDDbpDPLBYaEgvw83olzYH9+PQDWsEokjLN1S95Atxhy8wbOzRsjYqROLlIE528lICq5mUMoniYS/BTpBvpdYvSOA9/jRG7+PhQBEeLwGPic7dqaMrh9ySSa7Rn/rpEPWsk+bcXK4S5Q6zJjbjs8vWNmf9dCWskpjyWLDeM56V/bjCqrg0sXTCRs/R0a0Ibs1ZZUwmWg6j8wlAVLF4LfnyHgJ63Ep01pUOqBBcsAlUs4gOnF0HXWwE4FftPIW48hHdqKToCrGYK5yWhco3hyfUjAoFZyUlvS9ntii3INlariWvCdNpHkpvtMG7JTW1IBF4HJo8RY3gr37pvpE2tW6hGwNp9gSZUDh/cb9D/zmLLJMvu90AlMGWVGw2rw+ywlR7Qprab5gDwnNkyl0LnBsuKlcIz0f8DRZCxvVurOAqX8wMp8esikicC2P8exZDQB80bgL6igsdYv9/o3/QaGz94AAAAASUVORK5CYII="},320:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAVCAYAAAAU9vPjAAAABHNCSVQICAgIfAhkiAAAAzZJREFUWIXtlk1sVFUYhp/vnHvuMJ3BQEtr/aESbWyTloCQ2BB/FhqIitFEIbhSiYkmBkQXxJakG1kIEt2IRkNIDBqN1YSlEk2IQYIrKUGDRp3UDlMWNXQqxXY6M/dzMR0cmKkBcsps5knO5uS+733ve0++HGjQoMECY4AVCfgxAenyikEnQAw6k/BreT8Op0LomdN59YjD5kp9EwyW5IQJ6K/Qpx08B1jPGapY0QpHPzLMHLZoed0GQ8Ci5TA0ZMmX9weDINcGx4C7PHv0boDhSv2LQgp4Fdi2Vfi9vP+2s7rOmJ+A1Z4zXF5MF5z+OUAv9HRpNDKihSNf67RDv7Xkl8DoN4b8xQCddqV1zqEfh6F2wBlKzfvwuHctjKZCozMbHtJiKqWz772rZwP0DeHCoPB3ukKfdehXYaBdkAEe95QBgKCiHGfg5jubm3F79kFbK4Ud2wBYLQSHLMvvETDynyAOtBvBiLShGgKzHjwWWWi79f4HcG++hQ6fJDp4gBaBLYZkBCyr0MeAZSLYkj7h6Tuqypl7WwhLl5Lr7YZMBoCEwHqpenJ+PHhIezs6NUX+pRcgmwWg438ngv8M1eVMTFDY1Q/p9DUk8e8RHf8eTY9eKqYeGarLyeXQE8ev29Cbx1gGHcvUNUPlQR018PIrBTivVyc+LZb38wX+Ud0L/OnJ4+QsbN9fvDr9iFg+K0ZMqu4DfvCUoSbxm+CRR2G8PMlrrUmHHos5XSdyPglPAU2ePZIdMPCszK+fdugvodUnjNFW2A0s9pzhsosTQCEHYzOQTynr+wTiNQbYKbG8U1SGo2h3tnR3mPLsMTsJ53IgS6Cvt8YgPiuGLyLhSDH6MAMHgDHPGealKQYbnxb+qmw6O9f0g0Ym4rAJSCywR3M37H/tihP0mzO61Vq9Aw4CrQucoSbudtj5vKDlS9d3odWN1moLvM4VR3ABPVaugg8+NSX9H6HRPc5qFxwC1tygDDVJAk9uEsaPxpw+bMx4CFu4tqZ9eNyyBj7pt6I7Aqud8DnQcYMz1KYFBh6zdqYFBgBXJ4++HpEvV8Jh4L46ZajJYuAZSn+gnh53A911ztCgQYPr519ir2l1Zq5aDQAAAABJRU5ErkJggg=="},321:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAAAVCAYAAAAtkUK4AAAABHNCSVQICAgIfAhkiAAAA0xJREFUWIXtll2IlFUYx3/nnPe84+yMobvuun24SS3twq5kBi6SdVEopVGghl35QaAglnUR7QZ7oxf5Qd1kUogQFkVb4GWKgoRJXumKhUY1rDvOerHizubq7uzMvE8Xs2NjvmNaR2YW5g8HXg7v/8fzf57340BNNdVU03+SBubH4HQMksUVgVaACLTG4dfifhTO+tAx5XPKiMJrpf466C3Y8WPQXeJPWlgPmCrMEar5jXD8c83EIYMU18PQB8yYB319hmxxv9fzMk1wAnjcMaNzOfSX+jcpEsDbwNaNit+L+x9aI0u0/hlYWIU5bm9wG5z7xUOudbRJMDAguSOHZdwixwzZWTB4VJO97iHjtrAuW+QL35cWOE9hii4Yi5+GwYSvZWL585JPJGTyk4/lkodsV1zrVfyZLPGnLfK970kbpICXqyjHTXkl11bD3Mfq67E790BTI7ltWwFYqPAOGuY9pUCrvw1RoFkrtFJNiPjApAPGDANNDy19FvvBbqT/DMGB/TQoWKuJB8CcEn8EmKMUpuCPVVGO0CZPVe3D7NlkOtshlQIgpmCZuu3O8nLAUM3NyNgY2c1vQDoNQMu/fu3c1uCEQViTR0bIvd8NyeS9kRwzgpM/IsnBmw2uRA1OGIQ1OZNBfjr5v6BOGEMpZChV2RpcMLj1uDGoYctbObgqd2c+pwz7sjluiOwCLjpinJmEN/fm784/oAxf5wNGRfYAp6ooR1lFH4AXX4Lh4l8zbI1a5ETEyhKlrsZhFVDnmBFvgZ51qrx/3CIXfCOvaC2NsAOYWYU5gFsP8AC5DAxNQDYhLOtSEA35yJ9Vho/yQn8Q7EgXzo1jjhmTo3A5A2oWdHWG/PAuKc23geJIPvgsBfuBoSrMcUfVRWDlasWV0qmlp6b2nFYjUVgDxO4zo74d9r7zjyf6N6tlozHyKBwAGqdBjrKyj8C7GxRSPPz/4BtZaYw0wHuEvBb3ibHgSfj0K13w/+Fr2WmNtMFBYNE0ylFWceDVNYrh4xErL2g97MNa7m1qLhgPLoIvu42SbZ6RVvgGaJmGOcqrAXpWGDPRAD2ArRCjq0Op7xbAIeCZCtXghFFOM4HXKUyzkowngPYK1+CCUVNNNdUUpr8AnlEE7MMeIscAAAAASUVORK5CYII="},443:function(e,t,n){e.exports=n.p+"static/media/game_bg.1331d140.png"},444:function(e,t,n){e.exports=n.p+"static/media/heart_logo.87254a16.png"},454:function(e,t,n){e.exports=n.p+"./fonts/Nunito-Regular.ttf"},455:function(e,t,n){e.exports=n.p+"./fonts/Nunito-Bold.ttf"}},[[293,1,2]]]);
//# sourceMappingURL=../../82cea312357e40f635ab.map