import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsCheck2Square } from "react-icons/bs";
import { BsWifi } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { TiEyeOutline } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";


function BootsLand() {
    return (
        <>
            <Box p={5}>
                <Container fullWidth>
                <Button to={`/`} component={Link} sx={{ backgroundColor: '#fec1e4', color: 'black', mr:1 }}>Back</Button>
                    <Typography sx={{ backgroundColor: '#e9f0ea', color: "blue", fontWeight: 'bold', padding: 0.5, borderRadius: 1 }} variant="caption" color="initial">Ever Created For</Typography>
                    <Grid container spacing={5} direction="row" justifyContent="center" alignItems="stretch">
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography variant="h3" fontFamily="sans-serif">Let's Work With</Typography>
                            <Typography variant="h3" fontFamily="sans-serif" sx={{ color: "blue" }}>Bootsland</Typography>
                            <Typography mt={2} variant="h5" fontFamily="sans-serif" sx={{ color: "#b7bdb8" }}>Build a Beautiful, Clean & Modern Design website with flexible Bootstrap components.</Typography>
                            <Box display="flex" mt={3}>
                                <Button variant="contained" sx={{ backgroundColor: "#007bff", mr: 1 }}>Learn More</Button>
                                <Button variant="outlined">Get Started</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <img src="https://remote.ninja/assets/images/hero/01.png" alt="gambar" style={{ height: 450, width: 540 }} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>



            <Box p={5}>
                <Container fullWidth>
                    <Grid container spacing={5} direction="row" justifyContent="center" alignItems="stretch">
                        <Grid item xs={12} sm={6} md={6}>
                            <Paper elevation={3} align="center">
                                <Box p={4} mb={8}>
                                    <AiOutlineAppstore fontSize={76} color={'red'} />
                                    <Typography sx={{ fontWeight: 'bold', mt: 1 }}>Creative Design</Typography>
                                    <Typography mt={2}>Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</Typography><br />
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3}>
                            <Paper elevation={3} align="center">
                                <Box p={4}>
                                    <BsCheck2Square fontSize={67} color={'blue'} />
                                    <Typography sx={{ fontWeight: 'bold' }}>Easy To Start</Typography>
                                    <Typography marginTop={1}>Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3}>
                            <Paper elevation={3} align="center" >
                                <Box p={4}>
                                    <BsWifi fontSize={67} color={'blue'} />
                                    <Typography sx={{ fontWeight: 'bold' }}>Management</Typography>
                                    <Typography mt={1}>Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>



            <Box p={5}>
                <Grid container spacing={5} direction="row" justifyContent="center" alignItems="stretch">
                    <Grid item xs={12} sm={6} md={6}>
                        <img src="empat.png" alt="gambar" style={{ height: 500, width: 550 }} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography variant="h4">We're A Creative Software Landing Page</Typography><br />
                        <Typography variant="h5" sx={{ color: "#b7bdb8" }}>We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</Typography><br />
                        <Box display="flex">
                            <Box sx={{ backgroundColor: '#f5f7fc', color: 'blue', marginRight: 2 }}><BsCheck2 /></Box>
                            <Typography mr={4}>Fully Responsive</Typography>
                            <Box sx={{ backgroundColor: '#f5f7fc', color: 'blue', marginRight: 2 }}><BsCheck2 /></Box>
                            <Typography>Based On Bootstrap 4</Typography>
                        </Box><br />
                        <Box display="flex">
                            <Box sx={{ backgroundColor: '#f5f7fc', color: 'blue', marginRight: 2 }}><BsCheck2 /></Box>
                            <Typography mr={6}>Built with Sass</Typography>
                            <Box sx={{ backgroundColor: '#f5f7fc', color: 'blue', marginRight: 2 }}><BsCheck2 /></Box>
                            <Typography>SVG Icon</Typography>
                        </Box>
                        <Box display="flex" mt={3}>
                            <Button variant="outlined">Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>



            <Box sx={{ backgroundColor: 'black', padding: 5, color: "white" }}>
                <Container fullWidth>
                    <Grid container spacing={5} direction="row" justifyContent="center" alignItems="stretch" >
                        <Grid item xs={12} sm={4} md={4}>
                            <Typography variant='h4' >One Platform, Deep Insight Why Choose Bootsland</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Box display="flex">
                                <img src="Screenshot 1.png" alt="gambar" style={{ height: 80, width: 80 }} />
                                <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 3 }}>App Development</Typography>
                            </Box>
                            <Typography sx={{ color: "#b7bdb8" }}>Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Box display="flex">
                                <img src="Screenshot 2.png" alt="gambar" style={{ height: 80, width: 80 }} />
                                <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 3 }}>Clean Code</Typography>
                            </Box>
                            <Typography sx={{ color: "#b7bdb8" }}>Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Box display="flex">
                                <img src="Screenshot 3.png" alt="gambar" style={{ height: 80, width: 80 }} />
                                <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 2 }}>Software Development</Typography>
                            </Box>
                            <Typography sx={{ color: "#b7bdb8" }}>Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Box display="flex">
                                <img src="Screenshot 4.png" alt="gambar" style={{ height: 80, width: 80 }} />
                                <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 3 }}>Easy to customize</Typography>
                            </Box>
                            <Typography sx={{ color: "#b7bdb8" }}>Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Box display="flex">
                                <img src="Screenshot 5.png" alt="gambar" style={{ height: 80, width: 80 }} />
                                <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 3 }}>24/7 Support</Typography>
                            </Box>
                            <Typography sx={{ color: "#b7bdb8" }}>Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>



            <Box p={5} mt={4}>
                <Container fullWidth>
                    <Grid container spacing={5} direction="row" justifyContent="center" alignItems="stretch">
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography variant="h3" fontFamily="sans-serif">Bootsland Focus on your success</Typography>
                            <Typography mt={2} variant="h5" fontFamily="sans-serif" color="#b7bdb8">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</Typography>
                            <Box display="flex" marginTop={3}>
                                <img src="Screenshot.png" alt="gambar" style={{ height: 120, width: 120 }} />
                                <Box mt={4}>
                                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>Kendra Law</Typography>
                                    <Typography>Web Developer</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <img src="https://04-bootsland.netlify.app/images/about/02.png" alt="gambar" style={{ height: 500, width: 550 }} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>



            <Box p={3}>
                <Grid container spacing={5} direction="row">
                    <Grid item xs={12} sm={5} md={5}>
                        <Box>
                            <Typography variant="h3">Discover Our Client Feedback</Typography>
                        </Box>
                        <Typography variant="h5" color="#b7bdb8">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={7} md={7}>
                        <Stack direction="row" spacing={2} >
                            <Paper elevation={3} >
                                <Box display="flex">
                                    <Box mt={2} mr={3} ml={3}>
                                        <Avatar alt="gambar" src="Screenshot a.png" sx={{ width: 56, height: 56 }}/>
                                    </Box>
                                    <Box mt={2}>
                                        <Typography color="#b7bdb8">Bootsland Amazing Landing Page All-in-one, clean code, Crative & Modern design.</Typography>
                                        <Box display="flex" mb={3}>
                                            <Typography sx={{ color: "blue" }}>Romi Jensen</Typography>
                                            <Typography color="#b7bdb8">- Founder</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                            <Paper elevation={3} >
                                <Box display="flex">
                                    <Box mt={2} mr={3}  ml={3}>
                                        <Avatar alt="gambar" src="Screenshot b.png" sx={{ width: 56, height: 56 }}/>
                                    </Box>
                                    <Box mt={2}>
                                        <Typography color="#b7bdb8">Bootsland Amazing Landing Page All-in-one, clean code, Crative & Modern design.</Typography>
                                        <Box display="flex">
                                            <Typography sx={{ color: "blue" }}>Johny Stock</Typography>
                                            <Typography color="#b7bdb8">- Manager</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </Stack>
                        <Stack direction="row" spacing={2} mt={3}>
                            <Paper elevation={3} pb={3}>
                                <Box display="flex">
                                    <Box mt={2} mr={3} ml={3}>
                                        <Avatar alt="gambar" src="Screenshot c.png" sx={{ width: 56, height: 56 }}/>
                                    </Box>
                                    <Box mt={2}>
                                        <Typography color="#b7bdb8">Bootsland Amazing Landing Page All-in-one, clean code, Crative & Modern design.</Typography>
                                        <Box display="flex" mb={3} >
                                            <Typography sx={{ color: "blue" }}>Leeny Biton</Typography>
                                            <Typography color="#b7bdb8">- Manager</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                            <Paper elevation={3}>
                                <Box display="flex">
                                    <Box mt={2} mr={3}  ml={3}>
                                        <Avatar alt="gambar" src="Screenshot a.png" sx={{ width: 56, height: 56 }}/>
                                    </Box>
                                    <Box mt={2}>
                                        <Typography color="#b7bdb8">Bootsland Amazing Landing Page All-in-one, clean code, Crative & Modern design.</Typography>
                                        <Box display="flex">
                                            <Typography sx={{ color: "blue" }}>Jensen Rom</Typography>
                                            <Typography color="#b7bdb8">- Ceo</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </Stack>
                    </Grid>
                </Grid >
            </Box >



            <Box p={5}>
                <Container fullWidth>
                    <Grid container spacing={5} direction="row" justifyContent="center" alignItems="stretch">
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography variant="h4" fontFamily="sans-serif">From Our Blog List <br /> Latest Feed</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography marginTop={2} variant="h5" fontFamily="sans-serif" color="#b7bdb8">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>



            <Box p={5}>
                <Container fullWidth>
                    <Grid container spacing={5} direction="row" justifyContent="center" alignItems="stretch">
                        <Grid item xs={12} sm={4} md={4}>
                            <Paper elevation={3} align="center">
                                <img src="https://remote.ninja/assets/images/blog/01.png" alt="gambar" style={{ height: 300, width: 360 }} />
                            </Paper><br />
                            <Box display="flex">
                                < TiMessages color="#b7bdb8" fontSize={20} />
                                <Typography sx={{ ml: 1, marginRight: 3 }}>131</Typography>
                                < TiEyeOutline color="#b7bdb8" fontSize={24} />
                                <Typography sx={{ ml: 1, marginRight: 3 }}>255</Typography>
                                < TiMessages color="#b7bdb8" fontSize={20} />
                                <Typography sx={{ ml: 1 }}>14</Typography>
                            </Box>
                            <Typography mt={2} variant="h6" fontFamily="sans-serif">Bootsland Perfect Performance landing Page</Typography>
                            <Typography mt={2} variant="body1" fontFamily="sans-serif" color="#b7bdb8">Businesses need access to development resources serspiciatis unde omnis iste natus error.</Typography>
                            <Box mt={3}>
                                <Button sx={{ backgroundColor: "#f5f5f5", color: "#414541", marginRight: 20 }}>Sass</Button>
                                <Link sx={{ backgroundColor: "#f5f5f5", color: "#414541" }}>Read More</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Paper elevation={3} align="center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvqVjIAQqAhKRUjCaIfFp-IJoGJ3KQU0D1LVDMlimvbrbTNo6S-_trD5kpNnfXD7mnwPI&usqp=CAU" alt="gambar" style={{ height: 300, width: 300 }} />
                            </Paper><br />
                            <Box display="flex">
                                < TiMessages color="#b7bdb8" fontSize={20} />
                                <Typography sx={{ ml: 1, marginRight: 3 }}>131</Typography>
                                < TiEyeOutline color="#b7bdb8" fontSize={24} />
                                <Typography sx={{ ml: 1, marginRight: 3 }}>255</Typography>
                                < TiMessages color="#b7bdb8" fontSize={20} />
                                <Typography sx={{ ml: 1 }}>14</Typography>
                            </Box>
                            <Typography mt={2} variant="h6" fontFamily="sans-serif">The most powerfull template that make you.</Typography>
                            <Typography mt={2} variant="body1" fontFamily="sans-serif" color="#b7bdb8">Businesses need access to development resources serspiciatis unde omnis iste natus error.</Typography>
                            <Box mt={3}>
                                <Button sx={{ backgroundColor: "#f5f5f5", color: "#414541", marginRight: 17 }}>Marketing</Button>
                                <Link sx={{ backgroundColor: "#f5f5f5", color: "#414541" }}>Read More</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Paper elevation={3} align="center">
                                <img src="https://remote.ninja/assets/images/blog/03.png" alt="gambar" style={{ height: 300, width: 300 }} />
                            </Paper><br />
                            <Box display="flex">
                                < TiMessages color="#b7bdb8" fontSize={20} />
                                <Typography sx={{ ml: 1, mr: 3 }}>131</Typography>
                                < TiEyeOutline color="#b7bdb8" fontSize={24} />
                                <Typography sx={{ ml: 1, mr: 3 }}>255</Typography>
                                < TiMessages color="#b7bdb8" fontSize={20} />
                                <Typography sx={{ ml: 1 }}>14</Typography>
                            </Box>
                            <Typography mt={2} variant="h6" fontFamily="sans-serif">A brand for a company is like a reputation person.</Typography>
                            <Typography mt={2} variant="body1" fontFamily="sans-serif" color="#b7bdb8">Businesses need access to development resources serspiciatis unde omnis iste natus error..</Typography>
                            <Box mt={3}>
                                <Button sx={{ backgroundColor: "#f5f5f5", color: "#414541", mr: 20 }}>Landing</Button>
                                <Link sx={{ backgroundColor: "#f5f5f5", color: "#414541" }}>Read More</Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>



            <Box p={5} sx={{ backgroundColor: '#237efc' }}>
                <Grid container spacing={5} direction="row" justifyContent="center" alignItems="stretch">
                    <Grid item xs={12} sm={3} md={3}>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>Newsletter</Typography>
                        <Typography sx={{ color: 'white' }}>Subscribe Our Newsletter</Typography>
                        <Box mt={2}>
                            <TextField variant="outlined" placeholder="Email Address" sx={{ backgroundColor: 'white' }} />
                        </Box>
                        <Box mt={2} ml={7}>
                            <Button size="large" variant="contained" sx={{ backgroundColor: "#237efc" }}>Submit</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>Pages</Typography>
                        <Link to="/About" className="About">
                            <Button sx={{ color: 'white' }}>About</Button>
                        </Link><br />
                        <Link to="/Shop" className="Shop">
                            <Button sx={{ color: 'white' }}>Shop</Button>
                        </Link><br />
                        <Link to="/Faq" className="Faq">
                            <Button sx={{ color: 'white' }}>Faq</Button>
                        </Link><br />
                        <Link to="/Blogs" className="Blogs">
                            <Button sx={{ color: 'white' }}>Blogs</Button>
                        </Link><br />
                        <Link to="/Contact Us" className="Contact Us">
                            <Button sx={{ color: 'white' }}>Contact Us</Button>
                        </Link><br />
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>Service</Typography>
                        <Link to="/Content Writing" className="Content Writing">
                            <Button sx={{ color: 'white' }}>Content Writing</Button>
                        </Link><br />
                        <Link to="/Documentation" className="Documentation">
                            <Button sx={{ color: 'white' }}>Documentation</Button>
                        </Link><br />
                        <Link to="/Account" className="Account">
                            <Button sx={{ color: 'white' }}>Account</Button>
                        </Link><br />
                        <Link to="/Careers" className="Careers">
                            <Button sx={{ color: 'white' }}>Careers</Button>
                        </Link><br />
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>Legal</Typography>
                        <Link to="/Term Of Service" className="Term Of Service">
                            <Button sx={{ color: 'white' }}>Term Of Service</Button>
                        </Link><br />
                        <Link to="/Privacy Policy" className="Privacy Policy">
                            <Button sx={{ color: 'white' }}>Privacy Policy</Button>
                        </Link><br />
                        <Link to="/Support" className="Support">
                            <Button sx={{ color: 'white' }}>Support</Button>
                        </Link><br />
                    </Grid>
                </Grid>
                <Box display="flex">
                    <Typography variant="h4" sx={{ color: 'white', ml: 60, mr: 30 }}>Boots<strong>Land.</strong></Typography>
                    <Box mr={1}><FaFacebookF color="white" fontSize={25} /></Box>
                    <Box mr={1}><FiGlobe color="white" fontSize={25} /></Box>
                    <Box mr={1}><BsInstagram color="white" fontSize={25} /></Box>
                    <Box mr={1}><BsTwitter color="white" fontSize={25} /></Box>
                    <Box mr={1}><FaLinkedinIn color="white" fontSize={25} /></Box>
                </Box>
                <Box mt={8}>
                    <hr></hr>
                </Box>
                <Typography sx={{ color: 'white', mt: 7 }} align="center" > Copyright 2022 Bootsland Theme by Skytouch Infotech | All Rights Reserved</Typography>
                <Typography sx={{ color: 'white', mt: 3 }} align="center">Design By Tri wahyuni</Typography>
            </Box>
        </>
    )
}

export default BootsLand;
