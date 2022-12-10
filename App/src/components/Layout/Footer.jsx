import React from "react";
import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styled from "styled-components";

const StyledFooter = styled.div`
  width: 100%;

  @media (min-width: 600px) {
    width: calc(100% - var(--chakra-sizes-60));
    margin-left: 240px;
  }
`;

const Logo = (props) => {
  return (
    <svg
      width="120"
      height="75"
      viewBox="0 0 120 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M91.832 9.82851C91.832 9.82851 92.9768 4.69203 99.6992 4.52734C99.6992 4.52734 99.2384 11.1905 91.832 9.82851Z"
        fill="white"
      />
      <path
        d="M90.6093 9.73582C90.8553 9.73582 89.1465 4.83615 84.1377 3.29869L79.1289 1.76123C79.1289 1.76123 80.4825 9.76707 90.6093 9.73582Z"
        fill="white"
      />
      <path
        d="M88.4291 23.9706C88.9475 19.5794 92.3063 15.5452 96.2423 14.5872C98.3927 14.0631 100.446 14.3732 102.52 15.5332L102.595 15.5753C102.912 15.7532 103.212 15.9203 103.522 16.0669L104.25 16.4107C104.25 16.4107 104.261 16.4059 104.266 16.4035C103.444 14.824 102.205 13.5161 100.549 12.5028C97.1675 10.4352 93.7175 10.5133 90.2699 12.2696C86.2355 14.3239 82.8647 18.4987 84.2027 24.2723C84.4871 25.5021 85.0199 26.6693 85.3583 27.8882C85.3607 27.8966 85.3619 27.905 85.3643 27.9134L85.4579 28.244C85.5359 28.5229 85.4207 28.8102 85.1927 28.9556C85.1903 28.9701 85.0739 29.0169 85.0319 29.029C84.7703 29.1035 84.4919 28.9917 84.3467 28.7561C84.2471 28.5938 84.1871 28.4844 84.1871 28.4844L84.0623 28.1394C84.0047 28.0096 83.9603 27.8653 83.9135 27.7259L83.8631 27.5865C83.8583 27.5732 83.8523 27.5588 83.8475 27.5456C81.5699 21.9559 82.5851 16.8182 86.7239 13.105C87.3383 12.5545 88.0295 12.0941 88.7435 11.5483C86.7203 10.2729 84.6347 9.81614 82.3967 10.3607C78.6839 11.2646 75.5315 15.0776 75.0419 19.226C74.3543 25.0501 76.4171 29.6961 80.7779 33.3673C83.3567 35.5382 86.5271 36.5311 89.4419 38.0325C89.6147 38.1215 89.8967 38.1131 90.0803 38.0325C90.9179 37.6719 91.7579 37.3149 92.5919 36.947C89.2391 33.3444 87.8351 28.9905 88.4279 23.9682L88.4291 23.9706Z"
        fill="white"
      />
      <path
        d="M118.763 24.973C118.379 21.8452 116.85 19.4447 114.221 17.8363C111.202 15.9899 108.104 15.8877 104.76 17.5165C104.685 17.5538 104.609 17.5862 104.532 17.6259L104.268 17.7605L103.007 17.1643C102.659 16.9996 102.328 16.8145 102.006 16.6342L101.931 16.5921C100.694 15.8997 99.4708 15.5571 98.2276 15.5571C97.6672 15.5571 97.102 15.6269 96.5308 15.7663C93.0604 16.6114 90.0952 20.1996 89.6332 24.1135C89.0608 28.9675 90.4156 33.0125 93.7624 36.4252C94.1956 36.8664 94.6576 37.2991 95.158 37.7198C96.8944 39.1816 98.8876 40.0795 100.997 41.0304C101.891 41.4331 102.816 41.8502 103.709 42.3094C103.722 42.3118 103.8 42.3058 103.832 42.2925L104.608 41.9584C108.052 40.481 111.614 38.9544 114.418 36.2677C117.87 32.9608 119.292 29.2656 118.764 24.973H118.763ZM104.187 35.7605C102.119 35.7605 100.262 34.8709 98.968 33.4633C97.8256 32.2203 97.1224 30.5747 97.1224 28.7644C97.1224 24.9069 100.292 21.7683 104.187 21.7683C104.631 21.7683 105.064 21.8139 105.485 21.8921C108.761 22.4979 111.251 25.3469 111.251 28.7644C111.251 32.6218 108.082 35.7605 104.187 35.7605Z"
        fill="white"
      />
      <path
        d="M105.421 23.1122C105.023 23.0269 104.611 22.98 104.188 22.98C100.96 22.98 98.334 25.5741 98.334 28.7632C98.334 30.2898 98.9412 31.677 99.9228 32.712C100.992 33.8384 102.505 34.5464 104.188 34.5464C107.416 34.5464 110.041 31.9523 110.041 28.7632C110.041 25.9924 108.059 23.6736 105.421 23.1122Z"
        fill="white"
      />
      <path
        d="M70.4558 27.6887C70.331 27.4735 70.1509 27.3666 69.9193 27.3666C69.6506 27.3666 69.4094 27.4916 69.1946 27.7428C68.3894 28.6756 67.6909 29.374 67.1006 29.8404C66.5102 30.3068 65.8298 30.54 65.0606 30.54C64.1126 30.54 63.4142 30.1638 62.9665 29.4101C62.5369 28.6576 62.3222 27.3485 62.3222 25.4841C62.3222 24.9816 62.3402 24.2832 62.3762 23.3865H65.651C67.673 23.3865 68.6846 22.7674 68.6846 21.5305C68.6846 21.1903 68.6222 20.9571 68.4962 20.8309C68.3714 20.7058 68.165 20.6421 67.8782 20.6421H64.871C67.1978 18.5806 68.3605 16.1608 68.3605 13.3816C68.3605 12.3778 68.1458 11.5436 67.7162 10.8813C67.2866 10.2177 66.6962 9.88594 65.945 9.88594C64.9249 9.88594 63.9674 10.3704 63.0722 11.338C62.195 12.3057 61.4438 13.6064 60.8174 15.2376C60.191 16.8688 59.7254 18.6707 59.4218 20.6433H57.8918C57.0866 20.6433 56.6834 21.1458 56.6834 22.1495C56.6834 22.5799 56.7734 22.8936 56.9522 23.0908C57.149 23.2879 57.5162 23.3865 58.0526 23.3865H59.099C59.045 24.1931 59.0186 24.9913 59.0186 25.7798C59.0186 26.358 59.045 26.9002 59.0918 27.4134C58.925 27.4687 58.7678 27.5757 58.625 27.7428C57.8018 28.7285 57.149 29.4462 56.6654 29.8945C56.1818 30.3249 55.7702 30.54 55.4306 30.54C55.2158 30.54 55.037 30.4595 54.8942 30.2984C54.7694 30.1373 54.7058 29.9222 54.7058 29.6529C54.7058 28.8463 54.9122 27.4122 55.3238 25.3507C55.5926 23.9346 55.727 23.0379 55.727 22.6616C55.727 22.0341 55.289 21.7204 54.4118 21.7204C54.0002 21.7204 53.6066 21.7565 53.231 21.8286C53.141 21.4343 53.0246 21.165 52.8818 21.022C52.757 20.8609 52.4966 20.7804 52.103 20.7804C50.8682 20.7804 49.6958 21.1747 48.5858 21.9632C47.4938 22.7338 46.6166 23.7651 45.9554 25.0562C45.3206 26.2775 44.993 27.5733 44.9666 28.9437C44.6078 29.3356 44.291 29.6577 44.0233 29.8969C43.5398 30.3273 43.1198 30.5424 42.7622 30.5424C42.2426 30.5424 41.9834 30.1842 41.9834 29.4666C41.9834 28.9641 42.1538 27.9339 42.4934 26.3736C42.887 24.5453 43.0838 23.2807 43.0838 22.5823C43.0838 21.4175 42.5018 20.8345 41.339 20.8345C40.7486 20.8345 40.0958 21.04 39.3794 21.4523C38.681 21.8646 37.9658 22.5546 37.2314 23.5235C36.515 24.4732 35.8622 25.7113 35.2718 27.2343C35.2718 26.2486 35.2982 25.2894 35.3522 24.3566C37.733 21.7577 39.4501 19.4893 40.5062 17.5528C41.5622 15.5982 42.0902 13.7158 42.0902 11.9054C42.0902 10.7755 41.831 9.8619 41.3114 9.16229C40.8098 8.44465 40.1486 8.08643 39.3254 8.08643C37.7858 8.08643 36.4622 9.10819 35.3522 11.1517C34.2602 13.1772 33.4286 15.6872 32.855 18.6815C32.6642 19.7141 32.5178 20.7275 32.3918 21.7324C31.5158 21.7024 30.7322 21.6278 30.041 21.5052C30.9182 19.0313 31.3562 16.7811 31.3562 14.7556C31.3562 13.3215 31.0166 12.1915 30.3362 11.3669C29.6738 10.5423 28.7702 10.13 27.6254 10.13C26.6942 10.13 25.8446 10.3716 25.0754 10.856C24.3242 11.3405 23.7242 12.0749 23.2766 13.0606C22.847 14.0283 22.6322 15.2208 22.6322 16.6368C22.6322 18.0529 22.9094 19.3078 23.465 20.4017C24.0194 21.4776 24.8426 22.3563 25.9346 23.0367C25.0574 24.9732 24.0914 26.5948 23.0354 27.9039C21.9794 29.1949 21.0218 29.8404 20.1626 29.8404C19.4294 29.8404 18.8654 29.5351 18.4718 28.9257C18.0962 28.2982 17.837 27.393 17.693 26.2102C17.5682 25.0273 17.5046 23.4406 17.5046 21.4499C17.5046 18.5277 17.7554 15.6054 18.2558 12.6832C18.2918 12.5221 18.3098 12.2973 18.3098 12.0112C18.3098 11.5268 18.1754 11.1686 17.9066 10.9354C17.6558 10.6841 17.2538 10.5591 16.6982 10.5591C16.0358 10.5591 15.5078 10.7202 15.1142 11.0435C14.7386 11.3489 14.4794 11.9126 14.3354 12.7373C13.727 16.3231 12.9842 19.4148 12.107 22.0149C11.2298 24.597 10.3442 26.5504 9.44895 27.8774C8.57175 29.1865 7.82055 29.8404 7.19415 29.8404C6.49575 29.8404 5.94135 29.1865 5.52975 27.8774C5.11815 26.5684 4.91175 24.7136 4.91175 22.3106C4.91175 19.7286 5.18055 16.6007 5.71695 12.926C5.75295 12.5678 5.77095 12.325 5.77095 12.1999C5.77095 11.5725 5.61855 11.1421 5.31495 10.9089C5.02815 10.6757 4.61655 10.5591 4.08015 10.5591C3.36375 10.5591 2.83575 10.7382 2.49615 11.0964C2.17455 11.4366 1.95015 12.0557 1.82535 12.9524C1.35975 16.1079 1.12695 19.0025 1.12695 21.6387C1.12695 25.2605 1.56495 28.1467 2.44215 30.2972C3.31935 32.4309 4.61655 33.4972 6.33495 33.4972C7.85655 33.4972 9.28815 32.735 10.6298 31.2108C11.9894 29.6866 13.2074 27.3654 14.2802 24.246C14.387 27.06 14.8346 29.3103 15.623 30.9956C16.4102 32.6629 17.5922 33.496 19.1666 33.496C20.885 33.496 22.6202 32.6172 24.3746 30.861C26.129 29.1048 27.659 26.8629 28.9118 24.1919C29.8754 24.3914 30.9506 24.4924 32.1242 24.5092C32.063 25.4553 32.0198 26.3917 32.0198 27.3113L31.9934 29.463C31.9754 29.8032 31.967 30.2612 31.967 30.8346C31.967 31.8383 32.0474 32.5379 32.2082 32.9322C32.387 33.3084 32.7446 33.4972 33.2822 33.4972C34.625 33.4972 35.4662 32.7795 35.8058 31.3454C36.0746 30.2515 36.4238 29.2118 36.8522 28.226C37.2806 27.2403 37.7114 26.4518 38.141 25.8592C38.5706 25.2497 38.9018 24.9444 39.1346 24.9444C39.3314 24.9444 39.4298 25.0874 39.4298 25.3747C39.4298 25.8051 39.3134 26.5852 39.0806 27.714C38.8298 29.005 38.705 29.9017 38.705 30.403C38.705 31.4067 38.9378 32.1773 39.4034 32.7158C39.8689 33.2351 40.5578 33.496 41.471 33.496C42.581 33.496 43.565 33.1906 44.4242 32.5812C44.8046 32.3167 45.179 32.0138 45.5498 31.6856C45.6674 31.8984 45.8006 32.0991 45.953 32.2855C46.6154 33.0921 47.501 33.496 48.611 33.496C50.0246 33.496 51.197 32.7435 52.1282 31.2372C52.379 31.9369 52.7462 32.4922 53.2286 32.9045C53.7302 33.2988 54.275 33.496 54.8666 33.496C55.6358 33.496 56.4326 33.1822 57.2558 32.5547C58.079 31.9272 58.8578 31.1567 59.591 30.2419C59.6186 30.2107 59.6366 30.1722 59.6618 30.1386C60.4826 32.372 62.0906 33.496 64.4954 33.496C65.6762 33.496 66.7238 33.1906 67.6358 32.5812C68.549 31.9717 69.3902 31.1916 70.1593 30.2419C70.4989 29.8476 70.6693 29.2923 70.6693 28.5746C70.6693 28.1984 70.5974 27.9027 70.4546 27.6875L70.4558 27.6887ZM63.3686 16.287C63.6734 15.0861 63.9866 14.1533 64.3082 13.4898C64.6478 12.8082 64.9526 12.468 65.2214 12.468C65.615 12.468 65.8118 12.9969 65.8118 14.0547C65.8118 14.9876 65.543 16.0262 65.0065 17.1741C64.4869 18.3041 63.6998 19.3259 62.6438 20.2394C62.8406 18.7873 63.0818 17.4698 63.3686 16.2858V16.287ZM36.533 15.8831C36.9086 14.306 37.2938 13.0594 37.6874 12.1446C38.081 11.2118 38.4386 10.7466 38.7614 10.7466C38.9942 10.7466 39.173 10.8993 39.2978 11.2034C39.4226 11.5087 39.4862 11.9475 39.4862 12.5209C39.4862 13.7759 39.119 15.1739 38.3858 16.7161C37.6694 18.2584 36.7574 19.6829 35.6474 20.9919C35.8802 19.1455 36.1754 17.4422 36.533 15.8831ZM27.035 20.3476C25.907 19.505 25.3442 18.2055 25.3442 16.4481C25.3442 15.4083 25.4966 14.6101 25.8002 14.0547C26.105 13.4814 26.4986 13.1941 26.981 13.1941C27.3206 13.1941 27.5894 13.3732 27.7862 13.7314C27.983 14.0716 28.0814 14.6185 28.0814 15.3722C28.0814 16.6813 27.7322 18.339 27.035 20.3476ZM51.4838 28.2272C51.323 28.9978 51.0626 29.6168 50.705 30.0833C50.3474 30.5497 49.9718 30.7829 49.577 30.7829C49.1822 30.7829 48.8702 30.6482 48.6374 30.379C48.4226 30.1097 48.3158 29.6974 48.3158 29.142C48.3158 28.1383 48.5042 27.1875 48.8798 26.2919C49.2554 25.3952 49.757 24.6787 50.3834 24.1402C51.0278 23.5848 51.7262 23.2975 52.4774 23.2795L51.4838 28.2272Z"
        fill="white"
      />
      <path
        d="M14.1243 70.236C13.0143 70.236 12.1287 69.8321 11.4663 69.0255C10.8039 68.2189 10.4727 67.1611 10.4727 65.852C10.4727 64.418 10.8039 63.0644 11.4663 61.7914C12.1287 60.5004 13.0059 59.4702 14.0967 58.6985C15.2067 57.9099 16.3791 57.5156 17.6139 57.5156C18.0075 57.5156 18.2667 57.5962 18.3927 57.7572C18.5355 57.9003 18.6519 58.1696 18.7419 58.5638C19.1175 58.4917 19.5111 58.4569 19.9227 58.4569C20.7999 58.4569 21.2379 58.7706 21.2379 59.3981C21.2379 59.7743 21.1035 60.6711 20.8347 62.0871C20.4231 64.1487 20.2167 65.5828 20.2167 66.3894C20.2167 66.6586 20.2791 66.8738 20.4051 67.0349C20.5479 67.196 20.7267 67.2765 20.9415 67.2765C21.2811 67.2765 21.6927 67.0613 22.1763 66.631C22.6599 66.1826 23.3127 65.4662 24.1359 64.4793C24.3507 64.228 24.5919 64.103 24.8607 64.103C25.0935 64.103 25.2723 64.21 25.3971 64.4252C25.5399 64.6403 25.6119 64.9361 25.6119 65.3123C25.6119 66.0299 25.4415 66.5853 25.1019 66.9796C24.3687 67.8944 23.5899 68.6649 22.7667 69.2924C21.9435 69.9199 21.1467 70.2336 20.3775 70.2336C19.7871 70.2336 19.2411 70.0365 18.7395 69.6422C18.2559 69.2299 17.8899 68.6745 17.6391 67.9749C16.7079 69.4811 15.5367 70.2336 14.1219 70.2336L14.1243 70.236ZM15.0903 67.5205C15.4839 67.5205 15.8595 67.2873 16.2183 66.8209C16.5759 66.3545 16.8363 65.7366 16.9971 64.9649L17.9907 60.0171C17.2395 60.0352 16.5411 60.3225 15.8967 60.8778C15.2703 61.4152 14.7687 62.1328 14.3931 63.0296C14.0175 63.9263 13.8291 64.8759 13.8291 65.8797C13.8291 66.435 13.9359 66.8474 14.1507 67.1166C14.3835 67.3859 14.6967 67.5205 15.0903 67.5205Z"
        fill="white"
      />
      <path
        d="M51.3951 54.0741C51.3951 55.5983 51.0015 56.9963 50.2143 58.2693C49.4271 59.5423 48.2811 60.5821 46.7787 61.3887C45.2751 62.1953 43.4859 62.6701 41.4099 62.8144L40.2555 69.2948C39.8079 71.7867 38.5911 73.0332 36.6051 73.0332C35.5131 73.0332 34.5027 72.7111 33.5715 72.0656C32.6583 71.4201 31.9251 70.4344 31.3707 69.1073C30.8163 67.7802 30.5391 66.1489 30.5391 64.2136C30.5391 60.5737 31.1211 57.4904 32.2839 54.9624C33.4647 52.4164 35.0403 50.5159 37.0083 49.2609C38.9943 47.9879 41.1783 47.3521 43.5579 47.3521C45.2403 47.3521 46.6635 47.6478 47.8263 48.2392C49.0071 48.8306 49.8939 49.6372 50.4843 50.659C51.0927 51.6627 51.3975 52.8011 51.3975 54.0741H51.3951ZM41.8923 60.0436C45.5607 59.5772 47.3955 57.6683 47.3955 54.3157C47.3955 53.1328 47.0019 52.1736 46.2147 51.4379C45.4455 50.6854 44.2455 50.308 42.6171 50.308C40.7739 50.308 39.1635 50.891 37.7847 52.0558C36.4251 53.2206 35.3691 54.8434 34.6167 56.923C33.8835 58.9846 33.5163 61.3418 33.5163 63.996C33.5163 65.1079 33.6231 66.0936 33.8379 66.9543C34.0707 67.815 34.3575 68.487 34.6971 68.9714C35.0547 69.4378 35.3955 69.671 35.7171 69.671C36.1647 69.671 36.5043 69.052 36.7371 67.815L37.6227 62.7326C36.9243 62.6257 36.6207 62.58 36.7095 62.598C36.1731 62.5079 35.8239 62.3468 35.6631 62.1136C35.5023 61.8623 35.4219 61.5486 35.4219 61.1723C35.4219 60.7961 35.5287 60.4643 35.7435 60.2311C35.9763 59.9979 36.2895 59.8813 36.6831 59.8813C36.8619 59.8813 36.9963 59.8897 37.0863 59.9078C37.5159 59.9799 37.8471 60.0244 38.0799 60.0424C38.3127 58.6444 38.6439 56.7703 39.0735 54.4215C39.1803 53.812 39.4227 53.3817 39.7983 53.1304C40.1919 52.8612 40.6479 52.7265 41.1675 52.7265C41.7579 52.7265 42.1791 52.8431 42.4287 53.0763C42.6975 53.2915 42.8319 53.6413 42.8319 54.1246C42.8319 54.4119 42.8139 54.6451 42.7779 54.8242L41.8923 60.0412V60.0436Z"
        fill="white"
      />
      <path
        d="M99.1401 64.4277C99.0153 64.2125 98.8353 64.1055 98.6037 64.1055C98.3349 64.1055 98.0937 64.2306 97.8789 64.4818C97.0557 65.4675 96.3933 66.1851 95.8929 66.6335C95.4093 67.0639 94.9893 67.279 94.6317 67.279C94.1133 67.279 93.8529 66.9208 93.8529 66.2032C93.8529 65.7007 94.0233 64.6705 94.3629 63.1102C94.7565 61.2819 94.9533 60.0173 94.9533 59.3189C94.9533 58.1541 94.3713 57.5711 93.2085 57.5711C92.6181 57.5711 91.9641 57.7778 91.2489 58.1901C90.5505 58.6024 89.8353 59.2924 89.1009 60.2613C88.3845 61.2109 87.7317 62.4491 87.1413 63.9721C87.1413 62.9864 87.1677 62.0272 87.2217 61.0943C89.6025 58.4942 91.3197 56.2271 92.3757 54.2906C93.4317 52.336 93.9597 50.4535 93.9597 48.6432C93.9597 47.5133 93.7005 46.5997 93.1809 45.9001C92.6793 45.1824 92.0181 44.8242 91.1949 44.8242C89.6553 44.8242 88.3317 45.846 87.2217 47.8895C86.1297 49.915 85.2981 52.425 84.7257 55.4193C84.1713 58.4137 83.8929 61.2903 83.8929 64.0515L83.8797 65.0913C83.2305 65.7776 82.5717 66.3222 81.9009 66.7141C81.0597 67.1985 80.2725 67.4401 79.5381 67.4401C77.7309 67.4401 76.8273 66.4003 76.8273 64.3207C76.8273 63.5682 76.9341 62.877 77.1489 62.2495C77.3637 61.6221 77.6505 61.1292 78.0081 60.771C78.3657 60.3947 78.7509 60.206 79.1625 60.206C79.3773 60.206 79.5381 60.2685 79.6461 60.3947C79.7709 60.5198 79.8345 60.6989 79.8345 60.9321C79.8345 61.1653 79.7901 61.4165 79.7001 61.6846C79.6821 61.7567 79.6557 61.8733 79.6197 62.0344C79.5837 62.1954 79.5657 62.3385 79.5657 62.4647C79.5657 62.752 79.6641 62.9756 79.8609 63.1367C80.0757 63.2978 80.3529 63.3783 80.6937 63.3783C81.2301 63.3783 81.6597 63.1186 81.9825 62.5981C82.3221 62.0776 82.4925 61.4417 82.4925 60.6892C82.4925 59.7745 82.2153 59.0304 81.6609 58.457C81.1245 57.8656 80.3637 57.5699 79.3785 57.5699C78.3933 57.5699 77.4189 57.8656 76.5057 58.457C75.5925 59.0484 74.8497 59.8911 74.2773 60.985C73.7049 62.0788 73.4181 63.3518 73.4181 64.804C73.4181 65.1141 73.4409 65.4086 73.4757 65.6947C73.1265 66.0806 72.8217 66.3967 72.5673 66.6323C72.0837 67.0627 71.6721 67.2778 71.3325 67.2778C71.1177 67.2778 70.9389 67.1973 70.7961 67.0362C70.6713 66.8751 70.6077 66.66 70.6077 66.3907C70.6077 65.5841 70.8141 64.15 71.2257 62.0885C71.4945 60.6724 71.6289 59.7757 71.6289 59.3994C71.6289 58.7719 71.1909 58.4582 70.3137 58.4582C69.9021 58.4582 69.5085 58.4943 69.1329 58.5652C69.0429 58.1709 68.9265 57.9016 68.7837 57.7586C68.6589 57.5975 68.3985 57.517 68.0049 57.517C66.7701 57.517 65.5977 57.9112 64.4877 58.6998C63.3957 59.4703 62.5185 60.5017 61.8573 61.7928C61.2177 63.0213 60.8901 64.3255 60.8685 65.7043C60.4137 66.0842 59.9241 66.422 59.3949 66.7141C58.3749 67.2694 57.4617 67.5483 56.6565 67.5483C55.4037 67.5483 54.5541 67.136 54.1065 66.3114C56.2185 65.7909 57.7125 65.0925 58.5897 64.2137C59.4849 63.317 59.9325 62.2507 59.9325 61.0138C59.9325 59.956 59.6193 59.1229 58.9929 58.5123C58.3665 57.8848 57.5349 57.5711 56.4969 57.5711C55.3341 57.5711 54.2865 57.8848 53.3565 58.5123C52.4433 59.1398 51.7281 59.9908 51.2085 61.0667C50.6889 62.1245 50.4297 63.2713 50.4297 64.5082C50.4297 66.2837 50.9493 67.6817 51.9873 68.7035C53.0253 69.7253 54.4845 70.2361 56.3625 70.2361C57.7401 70.2361 59.0289 69.896 60.2277 69.2144C60.6789 68.9619 61.0797 68.6975 61.4553 68.427C61.5729 68.6398 61.7061 68.8405 61.8585 69.0257C62.5209 69.8322 63.4065 70.2361 64.5165 70.2361C65.9301 70.2361 67.1025 69.4837 68.0337 67.9774C68.2845 68.6771 68.6517 69.2324 69.1341 69.6447C69.6357 70.039 70.1805 70.2361 70.7721 70.2361C71.5413 70.2361 72.3381 69.9224 73.1613 69.2949C73.5909 68.968 74.0073 68.6001 74.4117 68.195C74.5521 68.391 74.7009 68.5809 74.8713 68.7576C75.8553 69.7433 77.2245 70.2361 78.9789 70.2361C80.0709 70.2361 81.1977 69.9585 82.3617 69.4019C82.9017 69.1399 83.4009 68.8225 83.8701 68.4631C83.9061 69.0016 83.9769 69.4067 84.0849 69.6712C84.2637 70.0474 84.6213 70.2361 85.1589 70.2361C86.5017 70.2361 87.3417 69.5185 87.6825 68.0844C87.9513 66.9905 88.2993 65.9507 88.7289 64.965C89.1585 63.9793 89.5881 63.1896 90.0177 62.5981C90.4473 61.9887 90.7785 61.6834 91.0113 61.6834C91.2081 61.6834 91.3065 61.8264 91.3065 62.1137C91.3065 62.544 91.1901 63.3242 90.9573 64.453C90.7065 65.744 90.5817 66.6407 90.5817 67.142C90.5817 68.1457 90.8145 68.9163 91.2801 69.4548C91.7457 69.9753 92.4345 70.235 93.3477 70.235C94.4577 70.235 95.4417 69.9296 96.3009 69.3202C97.1781 68.7107 98.0277 67.9306 98.8509 66.9809C99.1905 66.5866 99.3609 66.0313 99.3609 65.3136C99.3609 64.9374 99.2889 64.6417 99.1461 64.4265L99.1401 64.4277ZM88.4025 52.6221C88.7781 51.045 89.1633 49.7984 89.5569 48.8836C89.9505 47.9508 90.3081 47.4856 90.6309 47.4856C90.8637 47.4856 91.0425 47.6383 91.1673 47.9424C91.2921 48.2465 91.3557 48.6865 91.3557 49.2599C91.3557 50.5149 90.9885 51.9129 90.2553 53.4551C89.5389 54.9974 88.6269 56.4219 87.5169 57.7309C87.7497 55.8845 88.0449 54.1812 88.4025 52.6221ZM53.6757 64.1584C53.6757 63.0646 53.8989 62.1329 54.3465 61.3612C54.8121 60.5907 55.3761 60.2048 56.0373 60.2048C56.3589 60.2048 56.6097 60.313 56.7885 60.527C56.9853 60.7241 57.0837 60.9934 57.0837 61.3336C57.0837 61.9971 56.7789 62.5789 56.1705 63.0814C55.5621 63.5839 54.7293 63.9601 53.6733 64.2113V64.1572L53.6757 64.1584ZM67.3857 64.965C67.2249 65.7356 66.9657 66.3546 66.6069 66.821C66.2493 67.2875 65.8737 67.5207 65.4789 67.5207C65.0841 67.5207 64.7721 67.386 64.5393 67.1168C64.3245 66.8475 64.2177 66.4352 64.2177 65.8798C64.2177 64.8761 64.4061 63.9252 64.7817 63.0297C65.1573 62.1329 65.6589 61.4165 66.2853 60.878C66.9297 60.3226 67.6281 60.0353 68.3793 60.0173L67.3857 64.965Z"
        fill="white"
      />
      <path
        d="M103.96 63.8101C103.602 63.8101 103.307 63.7296 103.074 63.5685C102.842 63.4074 102.725 63.1562 102.725 62.816L102.752 62.6008C103.056 60.5934 103.468 58.307 103.986 55.743C104.506 53.1789 104.988 50.9647 105.436 49.1003C105.723 47.9535 106.5 47.3789 107.771 47.3789C108.916 47.3789 109.49 47.7467 109.49 48.4812C109.49 48.6423 109.463 48.8214 109.409 49.0185C108.944 50.919 108.327 53.2222 107.556 55.9293C106.787 58.6183 106.053 60.9576 105.356 62.9482C105.159 63.5216 104.693 63.8089 103.96 63.8089V63.8101ZM102.94 70.2376C102.153 70.2376 101.553 70.0225 101.141 69.5921C100.748 69.1618 100.551 68.5968 100.551 67.8984C100.551 67.0918 100.774 66.4463 101.222 65.9618C101.687 65.4774 102.332 65.2358 103.155 65.2358C103.942 65.2358 104.532 65.4329 104.926 65.8272C105.338 66.2035 105.544 66.7684 105.544 67.5209C105.544 68.3456 105.311 69.0091 104.846 69.5104C104.38 69.9948 103.745 70.2364 102.94 70.2364V70.2376Z"
        fill="white"
      />
    </svg>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <StyledFooter>
      <Box bg={useColorModeValue("#FF562D")} color={useColorModeValue("white")}>
        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
          >
            <Text>
              © 2022 Made with love by Gloria, Álvaro and María. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </StyledFooter>
  );
};

export default Footer;
