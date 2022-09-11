import React from 'react';

const TodayWeatherDetails = () => {
    return (
        <div className='grid md:grid-cols-3 gap-3 mt-7'>
            <div className="card bg-white drop-shadow rounded-3xl">
                <div className="py-4 px-7">
                    <div className='font-bold flex justify-between items-center'>
                        <p>Humidity</p>
                        <svg className='bg-success rounded' xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M10.583 15.458q.167-.02.292-.156.125-.135.125-.344 0-.229-.167-.375-.166-.145-.395-.104-1.209.167-2.219-.562-1.011-.729-1.198-1.979-.021-.188-.156-.313-.136-.125-.323-.125-.23 0-.386.167-.156.166-.114.395.229 1.626 1.541 2.626 1.313 1 3 .77ZM10 18q-2.708 0-4.604-1.896T3.5 11.5q0-2.021 1.552-4.271T10 2q3.458 3.125 4.979 5.354T16.5 11.5q0 2.708-1.896 4.604T10 18Zm0-1.5q2.083 0 3.542-1.458Q15 13.583 15 11.5q0-1.417-1.125-3.104Q12.75 6.708 10 3.979 7.25 6.708 6.125 8.396 5 10.083 5 11.5q0 2.083 1.458 3.542Q7.917 16.5 10 16.5Zm0-6.5Z" fill="#ffffff" /></svg>
                    </div>
                    <h2 className='text-xl text-center font-bold my-3'><span>82</span>% <span>bad</span></h2>
                    <div className="w-full flex justify-between text-xs ">
                        <span>Good</span>
                        <span>Normal</span>
                        <span>bad</span>
                    </div>
                    <progress className="progress progress-success" value="82" max="100"></progress>
                </div>
            </div>


            <div className="card bg-white drop-shadow rounded-3xl">
                <div className="py-4 px-7">
                    <div className='font-bold flex justify-between items-center'>
                        <p>Wind</p>
                        <svg className='bg-success rounded' xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M9.5 17q-1.042 0-1.771-.729Q7 15.542 7 14.5h1.5q0 .417.292.708.291.292.708.292t.708-.292q.292-.291.292-.708t-.292-.708Q9.917 13.5 9.5 13.5H2V12h7.5q1.042 0 1.771.729.729.729.729 1.771 0 1.042-.729 1.771Q10.542 17 9.5 17ZM2 8.5V7h11.25q.521 0 .885-.365.365-.364.365-.885t-.365-.885q-.364-.365-.885-.365t-.885.365Q12 5.229 12 5.75h-1.5q0-1.146.802-1.948T13.25 3q1.146 0 1.948.802T16 5.75q0 1.146-.802 1.948T13.25 8.5ZM15.25 15v-1.5q.521 0 .885-.365.365-.364.365-.885t-.365-.885Q15.771 11 15.25 11H2V9.5h13.25q1.146 0 1.948.802T18 12.25q0 1.146-.802 1.948T15.25 15Z" fill="#ffffff" /></svg>
                    </div>
                    <h2 className='text-xl text-center font-bold my-3'><span>7</span>% <span>km/h</span></h2>
                    <div className="w-full flex justify-between text-xs ">
                        <span>0</span>
                        <span>5</span>
                        <span>10</span>
                        <span>15</span>
                        <span>20</span>
                        <span>25</span>
                        <span>30</span>
                    </div>
                    <progress className="progress progress-success" value="7" max="100"></progress>
                </div>
            </div>

            <div className="card bg-white drop-shadow rounded-3xl">
                <div className="py-4 px-7">
                    <div className='font-bold flex justify-between items-center'>
                        <p>Precipitation</p>
                        <svg className='bg-success rounded' xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M11.458 17.917q-.291.145-.573.052-.281-.094-.427-.386l-1.25-2.5q-.146-.291-.052-.573.094-.281.386-.427.27-.145.562-.052.292.094.438.386l1.25 2.5q.146.291.052.573-.094.281-.386.427Zm4.125 0q-.291.145-.583.052-.292-.094-.438-.386l-1.25-2.5q-.145-.291-.041-.573.104-.281.396-.427.291-.145.573-.052.281.094.427.386l1.25 2.5q.145.291.052.573-.094.281-.386.427Zm-8.25 0q-.291.145-.583.052-.292-.094-.438-.386l-1.25-2.5q-.145-.291-.041-.573.104-.281.396-.427.291-.145.573-.052.281.094.427.386l1.25 2.5q.145.291.052.573-.094.281-.386.427ZM6.146 13q-1.771 0-2.958-1.281Q2 10.438 2 8.646q0-1.604 1.094-2.761 1.094-1.156 2.698-1.364.625-1.167 1.76-1.844Q8.688 2 10 2q1.771 0 3.083 1.135Q14.396 4.271 14.688 6q1.395.042 2.354 1.083Q18 8.125 18 9.5q0 1.458-1.021 2.479Q15.958 13 14.5 13Zm.104-1.5h8.25q.833 0 1.417-.583.583-.584.583-1.417 0-.833-.583-1.417Q15.333 7.5 14.5 7.5h-1.104l-.188-1.25q-.166-1.188-1.083-1.969Q11.208 3.5 10 3.5q-.958 0-1.75.521T7.042 5.417L6.75 6h-.5q-1.146 0-1.948.802T3.5 8.75q0 1.146.802 1.948t1.948.802Zm3.75-4Z" fill="#ffffff" /></svg>
                    </div>
                    <h2 className='text-xl text-center font-bold my-3'><span>1.4</span> <span>cm</span></h2>
                    <div className="w-full flex justify-between text-xs ">
                        <span>0</span>
                        <span>10</span>
                        <span>20</span>
                        <span>30</span>
                        <span>40</span>
                        <span>50</span>
                        <span>70</span>
                    </div>
                    <progress className="progress progress-success" value="7" max="100"></progress>
                </div>
            </div>

            <div className="card bg-white drop-shadow rounded-3xl">
                <div className="py-4 px-7">
                    <div className='font-bold flex justify-between items-center'>
                        <p>UV index</p>
                        <svg className='bg-success rounded' xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M10 4.25q-.354 0-.615-.26-.26-.261-.26-.615V1.708q0-.354.26-.614.261-.261.615-.261t.615.261q.26.26.26.614v1.667q0 .354-.26.615-.261.26-.615.26Zm4.083 1.667q-.25-.25-.25-.604 0-.355.25-.605l1.167-1.187q.25-.271.615-.261.364.011.614.261t.25.604q0 .354-.25.604l-1.187 1.188q-.25.25-.604.25-.355 0-.605-.25Zm2.542 4.958q-.354 0-.615-.26-.26-.261-.26-.615t.26-.615q.261-.26.615-.26h1.667q.354 0 .614.26.261.261.261.615t-.261.615q-.26.26-.614.26ZM10 19.167q-.354 0-.615-.261-.26-.26-.26-.614v-1.667q0-.354.26-.615.261-.26.615-.26t.615.26q.26.261.26.615v1.667q0 .354-.26.614-.261.261-.615.261ZM4.708 5.917 3.521 4.75q-.271-.25-.271-.615 0-.364.271-.614.25-.25.604-.25t.604.25l1.188 1.187q.25.25.26.605.011.354-.26.604-.25.25-.605.25-.354 0-.604-.25ZM15.25 16.479l-1.167-1.187q-.25-.25-.25-.604 0-.355.25-.605t.605-.25q.354 0 .604.25l1.187 1.167q.25.25.25.615 0 .364-.25.614-.25.271-.614.261-.365-.011-.615-.261ZM1.708 10.875q-.354 0-.614-.26Q.833 10.354.833 10t.261-.615q.26-.26.614-.26h1.667q.354 0 .615.26.26.261.26.615t-.26.615q-.261.26-.615.26ZM3.542 16.5q-.25-.25-.25-.604t.25-.604l1.187-1.188q.25-.25.604-.25.355 0 .605.25.27.25.26.615-.01.364-.26.614L4.771 16.5q-.25.25-.615.26-.364.011-.614-.26ZM10 14.917q-2.042 0-3.479-1.438Q5.083 12.042 5.083 10t1.438-3.479Q7.958 5.083 10 5.083t3.479 1.438Q14.917 7.958 14.917 10t-1.438 3.479Q12.042 14.917 10 14.917Zm0-1.75q1.312 0 2.24-.927.927-.928.927-2.24 0-1.312-.927-2.24-.928-.927-2.24-.927-1.312 0-2.24.927-.927.928-.927 2.24 0 1.312.927 2.24.928.927 2.24.927Z" fill="#ffffff" /></svg>
                    </div>
                    <h2 className='text-xl text-center font-bold my-3'><span>4</span><span> medium</span></h2>
                    <div className="w-full flex justify-between text-xs">
                        <span>0</span>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                        <span>6</span>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                    </div>
                    <progress className="progress progress-success" value="40" max="100"></progress>
                </div>
            </div>


            <div className="card bg-white drop-shadow rounded-3xl">
                <div className="py-4 px-7">
                    <div className='font-bold flex justify-between items-center'>
                        <p>Feels like</p>
                        <svg className='bg-success rounded' xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M10.979 9.417v-1.75h3.896v1.75Zm0-3.5v-1.75H17.5v1.75ZM6.771 17.5q-1.729 0-3-1.24Q2.5 15.021 2.5 13.25q0-1 .417-1.875.416-.875 1.208-1.479V5.125q0-1.104.771-1.865.771-.76 1.854-.76 1.104 0 1.865.76.76.761.76 1.865v4.771q.792.604 1.208 1.479.417.875.417 1.875 0 1.771-1.26 3.01-1.261 1.24-2.969 1.24ZM4.25 13.25h5q0-.604-.25-1.115-.25-.51-.75-.885l-.625-.479V5.125q0-.354-.26-.615-.261-.26-.615-.26t-.615.26q-.26.261-.26.615v5.646l-.625.479q-.5.375-.75.885-.25.511-.25 1.115Z" fill="#ffffff" /></svg>
                    </div>
                    <h2 className='text-xl text-center font-bold my-3'><span>32</span><sup>o</sup></h2>
                    <div className="w-full flex justify-between text-xs">
                        <span>0<sup>o</sup></span>
                        <span>25<sup>o</sup></span>
                        <span>50<sup>o</sup></span>
                    </div>
                    <progress className="progress progress-success" value="66.33" max="100"></progress>
                </div>
            </div>


            <div className="card bg-white drop-shadow rounded-3xl">
                <div className="py-4 px-7">
                    <div className='font-bold flex justify-between items-center'>
                        <p>Chance of rain</p>
                        <svg className='bg-success rounded' xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m16.271 17.5-5.209-5.229 1.209-1.25L17.5 16.25Zm-11.209-.542q-1.291-1.27-1.916-2.843t-.625-3.198q0-1.625.604-3.157.604-1.531 1.854-2.781 1.25-1.25 2.781-1.854 1.532-.604 3.157-.604 1.666 0 3.239.635 1.573.636 2.823 1.906Zm.167-2.646 1.063-1.041q-.334-.438-.625-.886-.292-.447-.532-.906-.239-.458-.427-.927-.187-.469-.333-.927-.208 1.292 0 2.49.208 1.197.854 2.197Zm2.333-2.27 4.5-4.542q-.895-.667-1.781-1.083Q9.396 6 8.615 5.833q-.782-.166-1.396-.073-.615.094-.969.448-.354.375-.448 1-.094.625.073 1.407.167.781.583 1.666.417.886 1.104 1.761Zm5.709-5.75 1.104-1.063q-1.125-.687-2.333-.885-1.209-.198-2.396.031.437.125.896.302.458.177.906.417.448.239.906.541.458.303.917.657Z" fill="#ffffff" /></svg>
                    </div>
                    <h2 className='text-xl text-center font-bold my-3'><span>42</span>%</h2>
                    <div className="w-full flex justify-between text-xs">
                        <span>0%</span>
                        <span>25%</span>
                        <span>50%</span>
                        <span>75%</span>
                        <span>100%</span>
                    </div>
                    <progress className="progress progress-success" value="42" max="100"></progress>
                </div>
            </div>

        </div>
    );
};

export default TodayWeatherDetails;