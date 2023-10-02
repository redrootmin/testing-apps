#!/bin/bash
#creator by RedRoot(Yaciyna Mikhail) for GAMER STATION [on linux] and Gaming Community OS Linux
# GPL-3.0 License 
# частично код bash взят из проектов: gloriouseggroll/nobara, 

# глобальные переменные библиотеки функций
INTERNET="no"


# функции библиотеки  
internet_check() {
      # проверка на наличие интернета
      wget -q --spider https://ya.ru
      if [ $? -eq 0 ]; then
          INTERNET="yes"
      fi
}



