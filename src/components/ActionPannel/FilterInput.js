import React from "react";
import {Input} from "antd";


export const FilterInput = ({id, placeholder, onSearch, enterButton="Filter"}) => (
    <Input.Search allowClear
                  placeholder={placeholder}
                  style={{width: "300px"}}
                  id={id}
                  enterButton = {enterButton}
                  onSearch={onSearch}
    />
)