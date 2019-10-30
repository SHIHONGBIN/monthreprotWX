
        function mapData(data) {
            var pageDatas = []
            if(data){
          var date = data.statistic_time.split('T')[0].split('-')
          console.log(date)
          //替换月份
          pageDatas.push({month:date[1]})
          //1综述
          var monthDate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
          pageDatas.push({
            data1:date[0] + '年' + date[1] + '月' + monthDate[(new Date().getMonth())] + '日',
            data2:tochangeMoney(data.platform_deal_money.toString().split('.')[0].substr(0,
              data
              .platform_deal_money.toString().split('.')[0]
              .toString().length - 4), 3),
              data3:tochangeMoney(data.total_income_money.toString().split('.')[0].substr(0, data
                .total_income_money
                .toString().split('.')[0].length - 4), 3),
                data4:tochangeMoney(data.platform_deal_money.toString().split('.')[0], 4),
                data5:tochangeMoney(data.total_income_money.toString().split('.')[0], 4)
          })
          //2成交量
          pageDatas.push({
              data1:tochangeMoney(data.platform_deal_money.toString(), 4),
              data2:tochangeMoney(data.month_deal_money.toString(), 4)
            }
          )
          //3出借方式
          pageDatas.push({
              data1:['rgb(96, 69, 227)', '#cccccc'],
              data2:savePointTow(data.auto_invest_percent * 1000) + '%',
              data3:savePointTow(data.manual_invest_percent * 1000) +
              '%',
              data4:tochangeMoney(data.auto_invest_money.toString(), 3) + '元',
              data5:tochangeMoney(data.manual_invest_money.toString(), 3) + '元'
            }
          )
          //去掉小数点
          function savePointTow(num) {
              return Math.round(num)/10
          }
          //4赚取收益
              pageDatas.push({
                  data1:tochangeMoney(data.total_income_money.toString().split('.')[0], 4),
                  data2:tochangeMoney(data.month_income_money.toString().split('.')[0], 4),
                  data3:tochangeMoney(data.month_income_number.toString().split('.')[0], 3, true),
                  data4:tochangeMoney(data.month_average_income_money.toString().split('.')[
                    0], 4)
                }
              )
          //5已还本息
          pageDatas.push({
              data1:tochangeMoney(data.month_already_capital.toString().split('.')[0], 4),
              data2:tochangeMoney(data.month_already_interest.toString().split('.')[0], 4)
          })
          //6项目分部
          var bd = ['30','60','90','120','180','360']
          pageDatas.push({
              data1:['#0dcfef', '#de5ae6', '#ffc33a', '#ff5f78', '#8a58f1', '#2f4beb'],
              data2: data.fact_date_point_borrowDTO.length!=0?data.fact_date_point_borrowDTO.map(function (i, index) {
                return {
                    value: i.month_borrow_count,
                    name:  i.month_borrow_day,
                    money: tochangeMoney(i.month_borrow_money.toString().split('.')[0], 4),
                }
            }):bd.map(function (i, index) {
                return {
                    value: 0,
                    name:  i,
                    money: 0,
                }
            })
            }
          )
          //7用户注册
          pageDatas.push({
              data1:tochangeMoney(data.platform_member_count.toString(), 3, true),
              data2:tochangeMoney(data.month_member_count.toString(), 3, true),
              data3: (data.platform_male_percent*100).toFixed(),
              data4: (data.platform_female_percent*100).toFixed(),
            }
          )
        }else{
            alert('无数据，服务器错误！')
        }
          return pageDatas
      }
      //转化千分位  money 钱 s 分割3或者4加一个逗号  dy  单位 人/钱
      function tochangeMoney(money, s, dy) {
          var t = s;
          var middlemoney = '';
          middlemoney = money.split('.')[1] ? (money.split('.')[0].split('').reverse().map(function (a, index) {
              if (index % t == 0 && index != 0) {
                  a += ','
              }
              return a
          }).reverse().join('') + '.' + money.split('.')[1]) : money.split('.')[0].split('').reverse().map(
              function (a, index) {
                  if (index % t == 0 && index != 0) {
                      a += ','
                  }
                  return a
              }).reverse().join('');
          if (t == 3 && !dy) {
              return middlemoney
          } else if (dy) {
              return middlemoney + '<span>人</span>'
          } else if (t == 4 && !dy) {
              //添加单位
              var textarr = ['元', '万', '亿']
              return middlemoney.split(',').reverse().map(function (i, index) {
                  if (i != 0) {
                      return i = i + '<span>' + textarr[index] + '</span>'
                  } else {
                      return ''
                  }
              }).reverse().join('')
          }
        }


      export default mapData
