<template>
  <div class="container">
    <div class="calculator m-5 rounded-3">
      <div
        class="row output p-4 rounded-3 m-3 text-end"
        style="margin-top: 100px"
      >
        <div class="row">
          <pre style="font-size: xx-large">
Total :            {{ totalResult }}</pre
          >
        </div>
        <div class="row">
          <div class="col">
            <h5
              v-show="checkOperator"
              style="
                color: white;
                border: 1px solid red;
                background-color: red;
                text-align: center;
              "
            >
              Error input
            </h5>
          </div>
          <div class="col">
            <h1>{{ result }}</h1>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-9">
          <div class="row">
            <div class="col-3 p-1">
              <button
                @click="appendNumber('7')"
                class="btn"
                style="
                  background-color: #5bc0de;
                  color: white;
                  padding: 10px 50px;
                  margin-left: 16.2px;
                "
              >
                7
              </button>
            </div>
            <div class="col-3 p-1">
              <button
                @click="appendNumber('8')"
                class="btn"
                style="
                  background-color: #5bc0de;
                  color: white;
                  padding: 10px 50px;
                  margin-left: 16.2px;
                "
              >
                8
              </button>
            </div>
            <div class="col-3 p-1">
              <button
                @click="appendNumber('9')"
                class="btn"
                style="
                  background-color: #5bc0de;
                  color: white;
                  padding: 10px 50px;
                  margin-left: 16.2px;
                "
              >
                9
              </button>
            </div>
            <div class="col-3 p-1">
              <button
                @click="clearAll()"
                class="btn"
                style="
                  background-color: #d9544f;
                  color: white;
                  padding: 10px 50px;
                  margin-left: 16.2px;
                "
              >
                AC
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-3 p-1">
              <button
                @click="appendNumber('4')"
                class="btn"
                style="
                  background-color: #5bc0de;
                  color: white;
                  padding: 10px 50px;
                  margin-left: 16.2px;
                "
              >
                4
              </button>
            </div>
            <div class="col-3 p-1">
              <button
                @click="appendNumber('5')"
                class="btn"
                style="
                  background-color: #5bc0de;
                  color: white;
                  padding: 10px 50px;
                  margin-left: 16.2px;
                "
              >
                5
              </button>
            </div>
            <div class="col-3 p-1">
              <button
                @click="appendNumber('6')"
                class="btn"
                style="
                  background-color: #5bc0de;
                  color: white;
                  padding: 10px 50px;
                  margin-left: 16.2px;
                "
              >
                6
              </button>
            </div>
            <div class="col-3 p-1">
              <button
                @click="appendNumber('/')"
                class="btn"
                style="
                  background-color: #efad4d;
                  color: white;
                  padding: 10px 50px;
                  margin-left: 16.2px;
                "
              >
                /
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-3 p-1">
              <button
                @click="appendNumber('1')"
                class="btn"
                style="
                  background-color: #5bc0de;
                  color: white;
                  padding: 10px 50px;
                  margin-left: 16.2px;
                "
              >
                1
              </button>
            </div>
            <div class="col-3 p-1">
              <button
                @click="appendNumber('2')"
                class="btn"
                style="
                  background-color: #5bc0de;
                  color: white;
                  padding: 10px 50px;
                  margin-left: 16.2px;
                "
              >
                2
              </button>
            </div>
            <div class="col-3 p-1">
              <button
                @click="appendNumber('3')"
                class="btn"
                style="
                  background-color: #5bc0de;
                  color: white;
                  padding: 10px 50px;
                  margin-left: 16.2px;
                "
              >
                3
              </button>
            </div>
            <div class="col-3 p-1">
              <button
                @click="appendNumber('+')"
                class="btn"
                style="
                  background-color: #efad4d;
                  color: white;
                  padding: 10px 50px;
                  margin-left: 16.2px;
                "
              >
                +
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-6 p-1">
              <button
                @click="appendNumber('0')"
                class="btn"
                style="
                  background-color: #5bc0de;
                  color: white;
                  padding: 10px 50px;
                  margin-left: 16.2px;
                "
              >
                0
              </button>
            </div>
            <div class="col-3 p-1">
              <button
                @click="appendNumber('.')"
                class="btn"
                style="
                  background-color: #5bc0de;
                  color: white;
                  padding: 10px 50px;
                  margin-left: 16.2px;
                "
              >
                .
              </button>
            </div>
            <div class="col-3 p-1">
              <button
                @click="appendNumber('-')"
                class="btn"
                style="
                  background-color: #efad4d;
                  color: white;
                  padding: 10px 50px;
                  margin-left: 16.2px;
                "
              >
                -
              </button>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="row">
            <div class="col-12 p-1">
              <button
                @click="clear"
                class="btn"
                style="
                  background-color: #d9544f;
                  color: white;
                  padding: 10px 50px;
                  margin-left: 16.2px;
                  width: auto;
                "
              >
                CE
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-12 p-1">
              <button
                @click="appendNumber('*')"
                class="btn"
                style="
                  background-color: #efad4d;
                  color: white;
                  padding: 10px 50px;
                  margin-left: 16.2px;
                  width: 119px;
                "
              >
                *
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-12 p-1">
              <button
                @click="findResult"
                class="btn"
                style="
                  color: white;
                  background-color: #5bb85d;
                  padding: 10px 50px;
                  margin-left: 16.2px;
                  width: 119px;
                  height: 100px;
                "
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const result = ref("0");
const operators = ["+", "-", "*", "/"];
const checkOperator = ref(false);
const totalResult = ref("");
const appendNumber = (num1: string) => {
  console.log(result.value);
  if (result.value == "0" || operators.includes(result.value[0])) {
    result.value = num1.toString();
  } else if (
    result.value[result.value.length - 1] === "." &&
    num1.toString() === "."
  ) {
    //nothing
  } else if (
    operators.includes(result.value[result.value.length - 1]) &&
    operators.includes(num1.toString())
  ) {
    checkOperator.value = true;
  } else if (result.value[result.value.length - 1] === "." && num1 === ".") {
    // nothing
  } else {
    checkOperator.value = false;
    result.value += num1.toString();
  }
};
const clear = () => {
  if (result.value.length === 1) {
    result.value = "0";
  } else {
    result.value = result.value.slice(0, -1);
  }
};
const clearAll = () => {
  result.value = "0";
  checkOperator.value = false;
};
const findResult = () => {
  const arr: RegExpMatchArray | any = result.value.match(
    /(\d+(\.\d+)?|[+\-*\/])/g
  );
  let operator:string|number = "";
  let totalResult = arr.reduce((a:any, b:any) => {
    if (isNaN(b)) {
      operator = b;
    } else {
      if (operator === "+") {
        a = parseFloat(a) + parseFloat(b);
      } else if (operator === "-") {
        a = parseFloat(a) - parseFloat(b);
      } else if (operator === "*") {
        a = parseFloat(a) * parseFloat(b);
      } else if (operator === "/") {
        a = parseFloat(a) / parseFloat(b);
      }
    }
    return a;
  });
result.value = totalResult.toString();
};

</script>
<style>
.container {
  background-color: #faebd6;
  height: 100vh;
}

.calculator {
  background-color: #224561;
  width: 75vw;
  height: 60vh;
  padding: 10px;
}

.output {
  background-color: #bcbcbc;
}

button {
  width: 100%;
  padding: 20px;
  font-size: 18px;
}
button:hover {
  background-color: #224561;
}
</style>
