import React, { useState, useCallback, useEffect } from 'react'
import logo from '../Home/Images/Logo.png'
import { Select, Radio, Space, Card, Avatar, Modal, Carousel, Empty, Drawer, Spin} from 'antd';
import GoogleMapReact from 'google-map-react';

const { Meta } = Card;

const { Option } = Select;

function Shop(props) {

    const [type,setType] = useState(null);
    const [price,setPrice] = useState(1);
    const [data,setData] = useState(null);
    const [visible,setVisible] = useState(false);
    const [modelData, setModelData] = useState(null)
    const [loader,setLoader] = useState(false);

    const FetchData = useCallback(
        () => {
            setLoader(true)
            setTimeout(() => {setLoader(false)}, 5000);
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
            
            fetch("http://192.168.1.3:5000/cattle", requestOptions)
                .then(response => response.json())
                .then(result => {
                    if(result !== null){
                        setData(result['cattle']);
                    }
                })
                .catch(error => console.log('error', error));
        },
        [],
    )

    useEffect(() => {
        FetchData()
    }, [FetchData])

    const showDrawer = () => {
        setVisible(true);
      };
    
    const onClose = () => {
        setVisible(false);
      };

    function handleType(value) {
        setType(value)
    }

    function handlePrice(e) {
        setPrice(e.target.value)
    }

    function handleSearch() {
        onClose()
        setData(null);
        if(type !== null && price !== 0){
            setLoader(true)
            setTimeout(() => {setLoader(false)}, 6000);
            if(type === 'All'){
                FetchData();
            }else{
                var min,max;
                switch (price) {
                    case 1:
                        min = 0; max=50000
                        break;
                    case 2:
                        min = 50000; max=100000
                        break;
                    case 3:
                        min = 100000; max=200000
                        break;
                    case 4:
                        min = 200000; max=300000
                        break;  
                    case 5:
                        min = 300000; max=400000
                        break;
                    case 6:
                        min = 400000; max=500000
                        break; 
                    default:
                        break;
                }
                var requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                };
                
                fetch(`http://192.168.1.3:5000/cattle/${type}/${min}/${max}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    if(result !== null){
                        setData(result['cattle']);
                    }
                })
                .catch(error => console.log('error', error));
            }
            
        }
    }

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = (card) => {
        setModelData(card)
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const center = {
        lat: 25.436318185207433,
        lng: 68.79215945716622
    }


    return (
        <div className="shop-outer-div row">
            <div className="sidenav-div col-12 col-xl-3">
                <div className="sidenav-logo-div">
                    <a href={`${props.BaseURL}/home`}><img className="sidenav-logo" src={logo} alt="logo"/></a>
                </div>
                <div className="sidenav-form-div">
                    <p className="sidenav-text">Select a Cattle</p>
                    <Select
                        showSearch
                        className="card-box"
                        style={{ width: 300}}
                        onChange={handleType}
                        placeholder="Select Cattle"
                        optionFilterProp="children"
                        defaultValue="all"
                        filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="All">All</Option>
                        <Option value="Cow">Cow</Option>
                        <Option value="Buffalo">Buffalo</Option>
                    </Select>
                    <p className="sidenav-text sidenav-price-text">Select Price Range</p>
                    <Radio.Group onChange={handlePrice} value={price}>
                        <Space direction="vertical">
                        <Radio value={1}>0 - 50,000 Rs</Radio>
                        <Radio value={2}>50,000 - 100,000 Rs</Radio>
                        <Radio value={3}>100,000 - 200,000 Rs</Radio>
                        <Radio value={4}>200,000 - 300,000 Rs</Radio>
                        <Radio value={5}>300,000 - 400,000 Rs</Radio>
                        <Radio value={6}>400,000 - 500,000 Rs</Radio>
                        </Space>
                    </Radio.Group>
                    <div className="sidenav-btn-outer-div">
                        <div className="sidenav-btn" onClick={handleSearch}>Search Cattle</div>
                    </div>
                </div>
            </div>
            <div className="animal-outer-div row col-12 col-xl-9">
                <div>
                    <Drawer
                        placement={'top'}
                        closable={true}
                        onClose={onClose}
                        visible={visible}
                        height={'fit-content'}
                        key={'top'}
                        className="drawer-box"
                    >
                        <div className="sidenav-logo-div d-flex justify-content-center">
                            <a href={`${props.BaseURL}/home`}><img className="sidenav-logo" src={logo} alt="logo"/></a>
                        </div>
                        <div className="sidenav-form-div drawer-details">
                            <p className="sidenav-text">Select a Cattle</p>
                            <Select
                                showSearch
                                className="card-box"
                                style={{ width: 300}}
                                onChange={handleType}
                                placeholder="Select Cattle"
                                optionFilterProp="children"
                                defaultValue="all"
                                filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="All">All</Option>
                                <Option value="Cow">Cow</Option>
                                <Option value="Buffalo">Buffalo</Option>
                            </Select>
                            <p className="sidenav-text sidenav-price-text">Select Price Range</p>
                            <Radio.Group onChange={handlePrice} value={price}>
                                <Space direction="vertical">
                                <Radio value={1}>0 - 50,000 Rs</Radio>
                                <Radio value={2}>50,000 - 100,000 Rs</Radio>
                                <Radio value={3}>100,000 - 200,000 Rs</Radio>
                                <Radio value={4}>200,000 - 300,000 Rs</Radio>
                                <Radio value={5}>300,000 - 400,000 Rs</Radio>
                                <Radio value={6}>400,000 - 500,000 Rs</Radio>
                                </Space>
                            </Radio.Group>
                            <div className="sidenav-btn-outer-div d-flex justify-content-center">
                                <div className="sidenav-btn drawer-btn" onClick={handleSearch}>Search Cattle</div>
                            </div>
                        </div>
                    </Drawer>
                </div>
                <div className="search-btn-div">
                    <div className="d-flex justify-content-center">
                        <div className="shop-logo-div"><img className="shop-logo" src={logo} alt={'logo'}/></div>
                    </div>
                    <div className="search-btn-block d-flex justify-content-end">
                        <div className="search-btn" onClick={showDrawer}>Filter</div>
                    </div>
                </div>
                
                {
                    data === null ?
                    <div className="animal-inner-div">
                        {
                            loader ?
                            <div className="loader-div d-flex justify-content-center align-content-center flex-wrap">
                                <Spin size="large" style={{color: '#223039', height: 'fit-content'}} tip="Loading..." />
                            </div>
                            :
                            <div className="empty-box">
                                <div>
                                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                                </div>
                            </div>
                        }
                    </div>
                    
                    :
                    data.map(card => 
                        <div key={card['_id']} className="card-outer-div">
                            <Card
                                onClick={() => {showModal(card)}}
                                className="card-box"
                                cover={
                                <img
                                    alt="example"
                                    className="card-cover-img"
                                    src={card['productImage']}
                                />
                                }
                            >
                                <Meta
                                    avatar={<Avatar src={logo} />}
                                    title={card['type']}
                                    description={card['description']}
                                />
                            </Card>
                        </div>
                    )
                }
                <div>
                    <Modal width={1000} footer={null} closable={true} className="model-box" visible={isModalVisible} onCancel={handleCancel}>
                        <Carousel autoplay className="model-carousel-box">
                            <div>
                                <img className="model-caroysel-img" src={modelData !== null ? modelData['productImage'] : ''} alt="bg1"/>
                            </div>
                            {/* <div>
                                <img className="model-caroysel-img" src={BG2} alt="bg1"/>
                            </div>
                            <div>
                                <img className="model-caroysel-img" src={BG3} alt="bg1"/>
                            </div> */}
                        </Carousel>
                        <div className="model-discription-div">
                            <p className="model-discription-heading">Cattle Details</p>
                            <p className="model-discription-name">{modelData !== null ? modelData['type'] : ''}</p>
                            <p className="model-discription-text">{modelData !== null ? modelData['description'] : ''}</p>
                            <p className="model-discription-price"><span>Price</span> {modelData !== null ? modelData['price'] : '0.00'}Rs</p>
                            <p className="model-discription-heading">Seller Details</p>
                            <p className="model-discription-seller"><span>Contact #:</span> <a href="tel://923479666466">+92 347-9666466</a></p>
                            <p className="model-discription-seller"><span>Location:</span> Pak Singhar, Tando Allah Yar, Sindh Tando Allahyar, Sindh, Pakistan</p>
                            <div style={{ height: '300px', width: '100%', paddingTop: '20px' }}>
                                <GoogleMapReact
                                defaultCenter={center}
                                defaultZoom={15}
                                >
                                </GoogleMapReact>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Shop
