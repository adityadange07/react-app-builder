export const SelectOptionComponent = ( props ) => {
  console.log("SelectOptionComponent props:", props);
  return (
    <>
      <style>
        {`
          .med_selectOption_md {
            position:relative;
            float:left;
            width:100%;
          }

          .med_selectOption_md select{
            width: 100%;
            height: 28px ! important;
            border: 1px solid #ccc;
            background: white;
            outline: none;
            cursor:pointer;
          }

          .med_selectOption_md:before {
            background: #fff none repeat scroll 0 0;
            /* border-right: 0px solid #ccc; */
            color: #34485d;
            content: "\f107";
            display: block;
            font-family: FontAwesome;
            font-size: 14px;
            height: 26px;
            line-height: 26px;
            width: 20px;
            pointer-events: none;
            position: absolute;
            right: 1px !important;
            top: 1px !important;
            text-align: center;
            font-weight: normal;
          }

          .med_selectOption_md:hover:before {
            background: #fff none repeat scroll 0 0;
          }
        `}
      </style>
      <div style={{ width: "100%" }}>
          <div style={{ width: "100%" }}>{props.title}</div>
          <div style={{ width: "100%", marginTop: "5px" }}>
              <label style={{ width: "100%" }}>
                  <select tabindex={131} style={{ width: "100%", paddingLeft: "5px" }}>
                    {props.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
              </label>
          </div>
      </div>
    </>
  );
};