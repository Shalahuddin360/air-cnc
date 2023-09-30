import React from 'react';
import Container from '../Shared/Container/Container';
import CategorysBox from './CategorysBox';
import { categories } from './categoriesData';
const Categories = () => {
    return <Container>
          <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto cursor-pointer'>
          {
                categories.map(item=> <CategorysBox 
                key={item.label}
                label={item.label}
                icon={item.icon}
                >

                </CategorysBox>)
            }
          </div>
         </Container>
};

export default Categories;