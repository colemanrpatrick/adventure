alert('You awake in the middle of a grassy clearing on the top of a hill.');

alert('The dreadful nausea and pounding sensation in your head reminds you that you really need to reduce your consumption of mead.');

var answer = prompt('You really need to get home and go do bed. Ahead of you are three paths. Where will you go?: left, right, or forward?');
  if (answer === 'left') {//begin choice left
    console.log('onwards!');
    alert('You take the left route. The path winds down a dusty road into a steadily densening forest.');
    alert('As you proceed a large green ogre climbs down from one of the trees. He doesnt look very happy to see you');
             answer = prompt('What will you do?: talk, escape, confront');
              if (answer ==="talk")
              {
                console.log('Talk, talk, talk, doesnt anybody fight anymore?');
                    alert('You casually say hello to the ogre, whom despite his aggressive disposition seems receptive');
                    alert('The Ogre informs you that you cannot pass without first answering his riddle. If you guess correct you can pass. If you guess wrong, he eats you.');
                    alert('cliche as it is, the ogre sits on his knees and asks his riddle');
                      answer = prompt('"What loses its head in the morning?" He growls.');
                          if (answer === 'a pillow'||answer === 'pillow'){
                              console.log('smarty pants');
                              alert('you guess correct. The ogre seems pleased and allows you to proceed');
                              alert('you make it out of the forest after some time, your headache now in full swing.');
                              alert('as you walk on you pass a thatched roof cobblestone shack advertising"The best junk this side of the ramble"');
                              answer = prompt('junk is your weakness and youre a compulsive buyer to boot. What will you do?: go inside, keep walking');
                                if (answer === "go inside") {
                                                            console.log('hey, its your money not mine');
                                                            alert('you walk inside the dimmly lit shop. There doesnt appear to be a shopkeeper');
                                                            alert('in fact, all you see is a single table with three items. There are no price tags.');
                                                            alert('obviously that means its all free stuff, right? On the table is a book, a pocket watch, and a vile of liquid');
                                                            answer = prompt('what will you do? Take the: book , watch, vile?');
                                                            if (answer === "watch") {
                                                                console.log('lets do the time warp agaaaaiiiiinnnnnn');
                                                                alert('you grab the pocket watch. As soon as your fingers pop it open the face glows with a blinding light.');
                                                                alert('Time itself seems to be moving backwards, as though the game has ended and if you want to keep going you must start from the beginning.');
                                                            }
                                                             else if(answer === "book") {
                                                               console.log('should have read the cliff notes');
                                                               alert('picking up the dusty tome, you open to the middle only to discover a set of very sharp teeth.');
                                                               alert('The book closes around your face... Thats it.');
                                                               alert('...I guess you could say...');
                                                               alert('...dont judge a book by its COVER!');
                                                               alert('...');
                                                               alert('...you know what, youre dead now so Im not even sorry for that pun.');
                                                            }
                                                            else if (answer === "vile"){
                                                              console.log('DRINK ME');
                                                              alert('hair of the dog that bit you comes to mind as you pick up the vile and sip its liquidy black contents');
                                                              alert('the liquid causes your finger tips to glow and your body to levitate into the air. You find yourself blessed with infinite omnipotence and omniprescence');
                                                              alert('actually you collapse onto the cold stone ground and youre never heard of again.');

                                                            }
                                                            else {
                                                              console.log('please phrase your answer in the form of a "not what you typed"');
                                                              alert('whats that champ? stand there and do nothing forever? You got it!');
                                                            }
                                                            }
                                else if (answer === "keep walking"){
                                                            console.log('good job kiddo, save your money');
                                                            alert('You keep on walking past the shop. Low and behold, a little ways down the path is your house.');
                                                            alert('You climb stumble inside and go to bed. Your journey has met its end.');}
                                else {

                                }
                            }
                        else {
                              console.log('why would you guess that?');
                              alert('displeased with your answer, the ogre eats you. Yeah, Im sure you wanted more details but suffice it to say it was messy. Not that you care deady McDeaderson.');
                            }
              }
              else if (answer ==='escape')
              {
                console.log('You coward');
                alert('you attempt to climb one of the trees. Tree climbing during an exchange of company is offensive in ogre culture.');
                alert('The ogre, being very tall, easily pulls you from atop the tallst branch you could reach, and swallows you whole. Nice Job');
              }
              else if (answer ==='confront')
              {
                console.log('Ha! You done goofed');
                alert('Talking no chances, you rush the Ogre and attempt a full nelson');
                alert('Unfortunately the Ogre won the title eigth years in a row, and your arms barely make it around his waist');
                alert('Needless to say the Ogre has no trouble pumbling you into the ground. Violence is never the answer');
              }
              else
              {
               console.log('Try picking one of the choices next time');
               alert('Whatever you were trying to do, it didnt work, and the Ogre thwomps you with his mighty club. You dead.');
              }
  } //begin choice forward

  else if (answer === 'forward'){
  console.log('straight ahead!');
           alert('you decide to take the scenic route.');
           answer = prompt('Up ahead is another three way split in the road. A wooden sign with arrows pointing in the directions of each split proclaims "east" "west" and "snourth" Which way will you go?');

          ///east
           if (answer === 'east'){
                      alert('You decide to head east.');
                        alert('up ahead you see a couple of armor clad women, each toasting a can of mutton on a spit');
                        alert('one of the women, the one with the redhair, beckons you to join them around the campfire. The other, named...Debbie? She doesnt seem to notice you');
                      answer = prompt('what will you do? talk to debbie, talk to the redhead, or run away?');

                      if (answer === "talk to debbie") {
                      alert('debbie appears to be very much distracted by keeping the "magical" fire alight');
                      alert('bored with this exchange, you wander off down the road and eventually make it home');
                      alert('...Dont be mad, debbie was actually a really boring person and you were spared having to talk to her and her most likely boring friend. I did you a favor ending it here');

                    }//talk to debbie

                      else if (answer === "talk to the redhead") {
                                alert('you approach the armored woman with the firey red hair. She smiles brightly at you and holds out a hand');
                                prompt('"My name is Rachelynne. Thats Debra the wizzard. Whats yours?"');
                                alert('"Huh... Thats a weird name...Im just gonna call you Fam"' );
                                answer = prompt('Rachelynn offers you a can of mutton. Its smells really bad. What will you do?: eat, dont');
                                if (answer === "eat") {
                                     alert('You slowly scrap a tiny chunk of mutton onto your thumb and gingerly eat it');
                                     alert('despite being nigh on the worst thing youve ever tasted, you force a smile and nod. This seems to please Rachelynne');
                                     alert('"hey, Ive never seen you around here before. How about you and I get to know each other better with a little fencing?"');
                                     answer = prompt('Will you duel with Rachelynne?: fence, dont fence');
                                     if (answer === 'fence') {
                                       alert('Wasting no time, Rachelynn tosses your a sword and the fight begins. Rechaelynn swings at you from the left');
                                       answer = prompt('what do you do?: swing left, swing right');
                                            if (answer === 'swingleft') {
                                            alert('You swing left for whatever reason and rachelynns sword pierces your breast. Despite this being a freidly duel you fall to the ground being in pathetically poor shape. Better do more crunches next time... bro.');
                                            }
                                            else if (answer === 'swing right') {
                                            alert('you swing your sword to the right and clash blades with rachelynn.');
                                            alert('Impressed by your bladework, rachelynn sheaths her sword and bows at your apparently skillful swordsmenship.');
                                            alert('A fire inside you heart is awoken. After much discussion you discover Rachelynn and Debra are adventurers and are looking for another companion to embark on an epic quest');
                                            alert('narturally you agree to do so, thus the three of you set off into the sunset to recover an ancient artiface from the hands of a demon');
                                            alert('...unfortunately youre later killed by falling into a really deep hole. Should have just gone to bed');

                                            }
                                            else {
                                            alert('you attempt whatever the hell that was, but end up dropping your sword and impaleing yourself. A guidebook in fencing may be of use to you at this point.');

                                            }
                                        }
                                else if (answer === 'dont fence') {
                                  alert('you decide not to fence. I sorta wrote myself into a corner here but this could thearetically go on forever so...');
                                  alert('lets see... a...ummm...');
                                  alert('....boulder...falls from the sky and...uhhh...');
                                  alert('yeah, a magic boulder falls from the sky and crushes you. There');
                                  alert('oh lay off, if you wanna have a better ending, try pressing the refresh button. I cant be bothered to myself');

                                  }
                                else {
                                alert('Despite you best attempts at social interaction, your own social anxiety takes hold of you and you pass out');
                                }

                            }
                            else if (answer === 'dont') {
                            alert('Meat is murder, so you pass up the opportunity to get some protien');
                            alert('this unfortunately was not the best of choices, as your crass refusal of delicious perishables happens to offend Debra the wizzard whom turns you into a lamb');
                            alert('it goes without saying youll probably be eaten next. Nice going.');
                            }
                            else {
                            alert('Despite you best attempts at social interaction, your own social anxiety takes hold of you and you pass out');
                            }

                      }//talk to redhead

                      else if (answer === "run away") {
                      alert('Fearing the two women taking advantage of your vulnerable hangover state, you flee the scene...');
                      alert('...in the wrong direction. You trip and fall landing face first in the magical bonfire pit, your body incinerated instantaniously.');
                      alert('perhaps you would be wise to invest in velcro boots instead there, slick');
                      }

                      else {
                      alert('Despite you best attempts at social interaction, your own social anxiety takes hold of you and you pass out');
                      }

           }
           //end east
           //begin west
           else if (answer === 'west'){
           alert('You remember that west is the road back home. You follow the path a little ways till you find your delightful little cottage. You collapse into bed and get some well deserved sleep.');
           }
           //end west
           //begin snourth
           else if (answer === 'snourth'){
           alert('you go snourth');
           alert('after following snourth a bit you find yourself in front of a cave.');
           answer = prompt('will you go inside?: yes, no');
           if (answer === 'yes') {
                   alert('you walk inside the cave.');
                   alert('as you travel the light from the entrance of the cave fades and it becomes impossible to see');
                   alert('as you feel along the wall you make out what feel like two extrusions, possilby buttons?');
                   answer = prompt('will you press the top one or the bottom one?: top, bottom');
                   if (answer === 'top') {
                     alert('the button depresses with a crisp "thunk" and a secret door opens revealing a gigantic glowing treasure trove');
                     alert('the hoard is chocked full of golden necklaces and broaches and coins each item adorned with precious glistening stones of untold value');
                     alert('in the center though, placed on a pillar of shimmering gold, under a blanket of brillian light, is a gold and diamond figure');
                     alert('luster overwhelms you, but you ponder for a moment');
                     answer = prompt('will you take the diamond figure?');
                        if (answer === 'yes') {
                          alert('Of course you do! Why wouldnt you?');
                          alert('after initial apraisal you sell the figure in an acution; keeping 50% which turned out to be more than enough to buy an even bigger cottage by the ocean where you lived comfortably for the rest of your days');
                        }
                       else if (answer === 'no') {
                         alert('you snap out of it. Hubris could have been your fall, and the curse of this treasure trove would have been your grave. You return home with the same ammount of wealth, but a greater understand of what it means to be... human');

                       }
                       else {
                         alert('you take too long and the exit seals behind you. You are forever locked inside the golden prison');
                       }
                   }
                   else if (answer === 'bottom') {
                     alert('the pirates of yore were expecting this trap linked to fate. The olden booby trap releases, a deadly neurotoxin...');
                     alert('...then explodes. Those pirates were nothing if not thorough');
                   }
                   else {

                     alert('your attempts at improv couldnt help you this time. You turn into a slimy frog person over the steady march of time, before threatening Hobbits with riddles or something');
                   }

           }
           else if(answer === 'no'){
            alert('you decide to go back, but unfortunately the way home eludes you.');
            prompt('over the next nine thousand years you have many adventures in your quest to make it home, some of which included:');
            alert('...wow. I gotta hand it to you I wasnt expecting that.');
            alert('...anyway the quest is over now. Go have a beer or something');

           }
           else {
           alert('your attmepts to make a concrete decicion fail to validate your next course of action, and you remain in a constant mental state of limbo for the rest of your existence, forever a shadow of whom you once were');
           }

           }
            //end snourth

  } //begin choice right
  else if (answer === 'right')
  {
          console.log('it worked this way too');
          alert('upon going right you immediately fall into a hole and become dead. At least it was an impressive fall though...');
  }
   else
  {
    console.log('If youre not giong to play the game right you can just stare at the screen');
    answer = alert('If youre not giong to play the game right you can just stare at the screen');
  }
