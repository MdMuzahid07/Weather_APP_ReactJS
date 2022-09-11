import React from 'react';
import Header from '../components/Dashboard/Header';
import WeatherLocation from '../components/WeatherView/WeatherLocation';
import WeatherViewHeader from '../components/WeatherView/WeatherViewHeader';
import WeatherSlider from '../components/WeatherView/WeatherSlider';

const Home = () => {
    return (
        <div className='md:max-w-4xl bg-img rounded-3xl md:flex justify-between'>
            <div className='md:w-1/4 p-5 text-white'>
                <WeatherViewHeader />
                <WeatherLocation />
                <WeatherSlider />
            </div>
            <div className='dashboard md:w-3/4 p-7 rounded-3xl'>
                <Header />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt modi odio, excepturi repellat placeat expedita iure sint dicta! Incidunt aspernatur nam vel quibusdam unde. Iste accusamus saepe quos. Maiores a, eligendi dolorum ad consequatur, ratione, earum saepe ipsa labore deleniti ut nemo et blanditiis quo quisquam nihil vel doloremque ullam nesciunt iusto. Iste similique, facere optio dolor deleniti eveniet molestiae iure ipsa minus pariatur perspiciatis error veritatis ad debitis id explicabo corporis suscipit. Deserunt, velit alias nisi cupiditate, vitae magnam explicabo vero distinctio quod dicta voluptates odio, voluptas nulla ea. Quis, dolore cum, ratione id iure illum nihil repellendus nostrum expedita tenetur rem perferendis saepe, consectetur cumque molestias excepturi. Facilis cum nemo odit cupiditate iure quam, tempore nobis laboriosam, nostrum debitis, tempora sequi molestias itaque porro ipsam soluta non voluptas totam error incidunt odio. Sit nobis ex dolorum iure nulla delectus eaque necessitatibus libero. Quasi tenetur atque animiibus officiis quis quae, recusandae autem error! Possimus reprehenderit, voluptatum quod temporibus consectetur excepturi id veniam voluptatem sed eligendi voluptate, eius dignissimos dolores! Sint at incidunt quasi perferendis vero voluptatibus, unde officia quae assumenda alias provident expedita impedit, vitae dolor rerum nulla reprehenderit repudiandae placeat beatae!
            </div>
        </div>
    );
};

export default Home;