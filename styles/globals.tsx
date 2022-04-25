import { type } from 'os';
import styled, {
  createGlobalStyle,
  ThemeProvider,
  css,
} from 'styled-components';
import { Type } from 'typescript';

const Globals = {
    palette:{
        // 키 컬러
        $color_base : '#ffad85',
        $color_middle : '#ff8040',
        $color_high : 'f96c00',

        // 회색
        $color_gray : '#f0f3f5',
        
        // 검은색
        $color_bloack : '#262626',
    }
};
export default Globals;
