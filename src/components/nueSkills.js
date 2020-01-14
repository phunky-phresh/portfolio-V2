import React from 'react';
import styled from '@emotion/styled';


const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;

`
const Icon = styled.div`
  width: 100px;
  height: 100px;
  margin: 10px;
`
const Img = styled.img`
height: 100px;
margin: 10px;
`

export default () => (
  <Grid>
    <Icon>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#FFD845" d="M40 68v-10.079c0-6.973 6.218-12.921 13.383-12.921h21.102c5.874 0 9.515-5.04 9.515-10.938v-20.117c0-5.726-4.306-10.026-10.04-10.981-3.629-.604-7.131-.879-10.743-.862-3.611.017-7.339.324-10.374.862-8.941 1.578-10.843 4.884-10.843 10.981v8.055h21v3h-28.108999999999998c-6.14 0-11.516 3.53-13.198 10.552-1.939 8.047-2.025 13.202 0 21.605 1.502 6.254 5.089 10.843 11.228 10.843h7.079zm12.054-51.372c-2.19 0-3.964-1.795-3.964-4.013 0-2.229 1.773-4.039 3.964-4.039 2.182 0 3.964 1.811 3.964 4.039 0 2.218-1.782 4.013-3.964 4.013zM106.175 35.552c-1.517-6.114-4.416-10.552-10.563-10.552h-8.612v9.062c0 7.273-5.484 13.938-12.515 13.938h-21.102c-5.78 0-11.383 4.403-11.383 10.193v20.117c0 5.725 5.388 9.093 10.974 10.734 6.686 1.967 12.781 2.322 20.782 0 5.318-1.54 10.244-4.638 10.244-10.734v-7.31h-21v-3h32.611c6.14 0 8.428-4.416 10.563-10.843 2.206-6.618 2.112-13.115.001-21.605zm-30.361 40.073c2.19 0 3.965 1.795 3.965 4.015 0 2.227-1.774 4.037-3.965 4.037-2.182 0-3.963-1.811-3.963-4.037 0-2.22 1.781-4.015 3.963-4.015z"/><path fill="#FFD845" d="M34.911 112.049c0-3.757-1.072-5.686-3.214-5.791-.853-.041-1.685.095-2.495.409-.646.231-1.082.461-1.311.692v8.968c1.371.86 2.588 1.26 3.649 1.197 2.247-.148 3.371-1.971 3.371-5.475zm2.643.157c0 1.909-.447 3.493-1.348 4.753-1.003 1.427-2.394 2.16-4.172 2.201-1.34.043-2.721-.378-4.142-1.258v8.151l-2.298-.82v-18.093c.377-.462.862-.859 1.451-1.196 1.368-.798 3.031-1.207 4.987-1.228l.033.032c1.788-.022 3.166.712 4.134 2.201.902 1.366 1.355 3.117 1.355 5.257z"/><path fill="#FFD845" d="M51.603 117.555c0 2.56-.257 4.333-.77 5.318-.516.986-1.497 1.773-2.945 2.359-1.174.463-2.444.714-3.808.757l-.38-1.448c1.386-.188 2.362-.378 2.928-.566 1.114-.377 1.878-.955 2.298-1.73.337-.631.503-1.835.503-3.618v-.599c-1.571.714-3.219 1.068-4.941 1.068-1.132 0-2.13-.354-2.99-1.068-.966-.777-1.449-1.764-1.449-2.958v-9.566l2.299-.787v9.63c0 1.028.332 1.82.996 2.376s1.524.822 2.578.803c1.054-.022 2.183-.431 3.382-1.228v-11.234h2.299v12.491z"/><path fill="#FFD845" d="M60.576 119.034c-.274.022-.525.032-.757.032-1.3 0-2.314-.309-3.038-.93-.722-.622-1.084-1.479-1.084-2.573v-9.054h-1.574v-1.446h1.574v-3.84l2.296-.817v4.657h2.583v1.446h-2.583v8.991c0 .862.231 1.474.694 1.83.397.295 1.029.463 1.889.506v1.198z"/><path fill="#FFD845" d="M74.493 118.845h-2.298v-8.873c0-.902-.211-1.68-.631-2.329-.485-.734-1.159-1.102-2.024-1.102-1.054 0-2.372.556-3.954 1.668v10.636h-2.298v-21.208l2.298-.725v9.659c1.469-1.068 3.073-1.604 4.816-1.604 1.218 0 2.203.41 2.958 1.228.757.817 1.134 1.836 1.134 3.053v9.597h-.001z"/><path fill="#FFD845" d="M86.711 111.688c0-1.444-.274-2.636-.82-3.579-.649-1.149-1.657-1.756-3.021-1.818-2.52.146-3.778 1.951-3.778 5.412 0 1.587.262 2.912.79 3.976.674 1.356 1.685 2.024 3.033 2.002 2.531-.02 3.796-2.017 3.796-5.993zm2.518.015c0 2.055-.526 3.765-1.575 5.131-1.154 1.528-2.749 2.296-4.783 2.296-2.017 0-3.589-.768-4.723-2.296-1.028-1.366-1.542-3.076-1.542-5.131 0-1.932.556-3.556 1.668-4.879 1.174-1.403 2.718-2.107 4.627-2.107 1.909 0 3.463.704 4.66 2.107 1.111 1.323 1.668 2.947 1.668 4.879z"/><path fill="#FFD845" d="M102.407 118.845h-2.299v-9.376c0-1.028-.31-1.831-.928-2.409-.619-.576-1.443-.855-2.472-.833-1.091.021-2.13.378-3.116 1.069v11.549h-2.299v-11.833c1.323-.963 2.54-1.592 3.652-1.886 1.049-.274 1.974-.41 2.771-.41.545 0 1.059.053 1.542.158.903.209 1.637.596 2.203 1.164.631.629.946 1.384.946 2.267v10.54z"/></svg>
    </Icon>
    <Icon>
      <svg id="typescript" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><title>Artboard 4</title><path fill="#007acc" id="plain" className="cls-1" d="M2,63.91v62.5H127V1.41H2Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1A23,23,0,0,1,80,109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82.5,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.73,58.93ZM73.39,64.15l0,5.12H57.16V115.5H45.65V69.26H29.38v-5a49.19,49.19,0,0,1,.14-5.16c.06-.08,10-.12,22-.1L73.33,59Z"/></svg>
    </Icon>
    <Icon>
      <svg xmlns="http://www.w3.org/2000/svg" height="128" viewBox="0 0 128 128" width="128" version="1.1"><path d="m-2.3125e-8 8.9337 49.854 0.1586 14.167 24.47 14.432-24.47 49.547-0.1577-63.834 110.14zm126.98 0.6374-24.36 0.0207-38.476 66.052-38.453-66.052-24.749-0.0194 63.211 107.89zm-25.149-0.008-22.745 0.16758l-15.053 24.647-14.817-24.647-22.794-0.1679 37.731 64.476zM25.997 9.3929l23.002 0.0087M25.997 9.3929l23.002 0.0087" fill="none"/><path d="m25.997 9.3929 23.002 0.0087l15.036 24.958 14.983-24.956 22.982-0.0057-37.85 65.655z" fill="#35495e"/><path d="m0.91068 9.5686 25.066-0.1711 38.151 65.658 37.852-65.654 25.11 0.0263-62.966 108.06z" fill="#41b883"/></svg>
    </Icon>
  </Grid>
)
