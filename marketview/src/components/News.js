import React, { useEffect } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import '../css/News.css'


function News({ username, newsData, setNewsData, setUsername, 
                setPassword, setShowWelcomeModal, setLoginStatus,
                setLoginStatus2}) {
    const finnhubApiKey = process.env.REACT_APP_FINNHUB_API_KEY;

    const getNewsData = async () => {
        await fetch(`https://finnhub.io/api/v1/news?category=general&token=${finnhubApiKey}`)
                .then(Response => Response.json())
                .then(data => setNewsData(data))
    }
    useEffect(() => {
        getNewsData()
    }, [])

    // components of elements in newsData include:
    //.category .datetime .headline .id .image .related .source .summary .url
    const article1 = newsData[0]
    const article2 = newsData[1]
    const article3 = newsData[2]
    const article4 = newsData[3]
    const article5 = newsData[4]
    const article6 = newsData[5]
    const article1Time = convert(article1.datetime)
    const article2Time = convert(article2.datetime)
    const article3Time = convert(article3.datetime)
    const article4Time = convert(article4.datetime)
    const article5Time = convert(article5.datetime)
    const article6Time = convert(article6.datetime)

    return (
        <div>
            <Header 
            title = "News" 
            username = {username} 
            setUsername = {setUsername}
            setPassword = {setPassword}
            setShowWelcomeModal = {setShowWelcomeModal}
            setLoginStatus = {setLoginStatus}
            setLoginStatus2 = {setLoginStatus2} 
            />
            <Navbar />
            <div className="articles">
                <div className="articleCard">
                    <div className="cardText">
                        <h1>{article1.headline}</h1>
                        <p>{article1.summary}</p>
                        <div className = "cardSource">
                            <p>{article1.source}</p>
                            <p className="cardTime">{article1Time}</p>
                        </div>
                    </div>
                    <div className="cardImage">
                        <a href={article1.url} target="_blank"> 
                            <img src={article1.image} alt="Article 1 Photograph" />
                        </a>
                    </div>
                </div>
                <div className="articleCard">
                    <div className="cardText">
                        <h1>{article2.headline}</h1>
                        <p>{article2.summary}</p>
                        <div className = "cardSource">
                            <p>{article2.source}</p>
                            <p className="cardTime">{article2Time}</p>
                        </div>
                    </div>
                    <div className="cardImage">
                        <a href={article2.url} target="_blank"> 
                            <img src={article2.image} alt="Article 2 Photograph" />
                        </a>
                    </div>
                </div>
                <div className="articleCard">
                    <div className="cardText">
                        <h1>{article3.headline}</h1>
                        <p>{article3.summary}</p>
                        <div className = "cardSource">
                            <p>{article3.source}</p>
                            <p className="cardTime">{article3Time}</p>
                        </div>
                    </div>
                    <div className="cardImage">
                        <a href={article3.url} target="_blank"> 
                            <img src={article3.image} alt="Article 3 Photograph" />
                        </a>
                    </div>
                </div>
                <div className="articleCard">
                    <div className="cardText">
                        <h1>{article4.headline}</h1>
                        <p>{article4.summary}</p>
                        <div className = "cardSource">
                            <p>{article4.source}</p>
                            <p className="cardTime">{article4Time}</p>
                        </div>
                    </div>
                    <div className="cardImage">
                        <a href={article4.url} target="_blank"> 
                            <img src={article4.image} alt="Article 4 Photograph" />
                        </a>
                    </div>
                </div>
                <div className="articleCard">
                    <div className="cardText">
                        <h1>{article5.headline}</h1>
                        <p>{article5.summary}</p>
                        <div className = "cardSource">
                            <p>{article5.source}</p>
                            <p className="cardTime">{article5Time}</p>
                        </div>
                    </div>
                    <div className="cardImage">
                        <a href={article5.url} target="_blank"> 
                            <img src={article5.image} alt="Article 5 Photograph" />
                        </a>
                    </div>
                </div>
                <div className="articleCard">
                    <div className="cardText">
                        <h1>{article6.headline}</h1>
                        <p>{article6.summary}</p>
                        <div className = "cardSource">
                            <p>{article6.source}</p>
                            <p className="cardTime">{article6Time}</p>
                        </div>
                    </div>
                    <div className="cardImage">
                        <a href={article6.url} target="_blank"> 
                            <img src={article6.image} alt="Article 6 Photograph" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const convert = (timeStamp) => {
    // Convert timestamp to milliseconds
    var date = new Date(timeStamp*1000)

    // Year
    var year = date.getFullYear()

    // Month
    var month = date.getMonth()+1

    // Day
    var day = date.getDate()

    // Hours
    var hours = date.getHours()

    // Minutes
    var minutes = "0" + date.getMinutes()

    // Display date time in xM/xd/yyyy xh:mm:am/pm format
    var convdataTime
    if (hours > 12) {
        hours -= 12;
        convdataTime = month+'/'+day+'/'+year+' '+hours + ':' + minutes.substr(-2) + 'pm'
    }
    else if (hours === 12) {
        convdataTime = month+'/'+day+'/'+year+' '+hours + ':' + minutes.substr(-2) + 'pm'
    }
    else if (hours === 0) {
        hours += 12;
        convdataTime = month+'/'+day+'/'+year+' '+hours + ':' + minutes.substr(-2) + 'am'
    }
    else {
        convdataTime = month+'/'+day+'/'+year+' '+hours + ':' + minutes.substr(-2) + 'am'
    }
    return convdataTime;
}

export default News