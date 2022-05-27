import React, { useEffect, useState, useRef } from 'react';
import EditPageComponent from './editpage';
import {EditPageType} from './editpageType'

const EditPage: React.FC<EditPageType> = (props, {}: EditPageType) => {

return(
    <EditPageComponent {...props} />

    )};

export default EditPage;