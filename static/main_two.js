
    var rates = {"bank":{"usd":{"buy":"1.7000","sell":"1.7025","cash_buy":"1.7000","cash_sell":"1.7025"},"eur":{"buy":"1.9100","sell":"1.9400","cash_buy":"1.9100","cash_sell":"1.9500"},"rub":{"buy":"0.0217","sell":"0.0223","cash_buy":"0.0217","cash_sell":"0.0223"},"gbp":{"buy":"2.2950","sell":"2.3300","cash_buy":"2.2900","cash_sell":"2.3550"}},"mb":{"usd":{"buy":"1.7000","sell":"1.7000"},"eur":{"buy":"1.9261","sell":"1.9261"},"rub":{"buy":"0.0221","sell":"0.0221"},"gbp":{"buy":"2.3128","sell":"2.3128"}}},
    calculate = function () {
        var c = $('.calculator'),
            cash = $('.change_rates .select_content a.active').data('cash'),
            from = c.find('select[name=from]').val(),
            to = c.find('select[name=to]').val(),
            curr = from === "azn" ? to : from,
            buy = cash ? rates['bank'][curr]['cash_buy']  :  rates['bank'][curr]['buy'],
            sell = cash ? rates['bank'][curr]['cash_sell'] : rates['bank'][curr]['sell'] ,
            input_value = $('.input_value').val(),
            input_result = $('.input_result'),
            result = from === "azn"
                ? (parseInt(input_value) / sell ).toFixed(2)
                : Math.round(parseInt(input_value) * sell * 100) / 100;

            console.log('Buy:'+buy);
        /*if (from !== "azn") {
            $('.cr_item_curr[data-curr!=azn],.cr_item_buy[data-curr!=azn],.cr_item_sell[data-curr!=azn]').hide();
            $('.cr_item_curr[data-curr=azn],.cr_item_buy[data-curr=azn],.cr_item_sell[data-curr=azn]').show();
            $('.cr_item_buy[data-curr=azn]').html(buy);
            $('.cr_item_sell[data-curr=azn]').html(sell);
        } else {
            $('.cr_item_curr[data-curr!=azn],.cr_item_buy[data-curr!=azn],.cr_item_sell[data-curr!=azn]').show();
            $('.cr_item_curr[data-curr=azn],.cr_item_buy[data-curr=azn],.cr_item_sell[data-curr=azn]').hide();
        }*/
        input_result.html(result);
    },
    table = function () {
        var cash = $('.change_rates .select_content a.active').data('cash')
        $('.cr_item_buy.table_buy_rate').map((index, item) => {
            var item = $(item);
            item.html(item.data((cash ? '' : 'no') + 'cash'));
        })

        $('.cr_item_sell.table_sell_rate').map((index, item) => {
            var item = $(item);
            item.html(item.data((cash ? '' : 'no') + 'cash'));
        })
    };
$(function () {
    calculate();
    table();
});
$(document).on('click', '.change_rates .select_content a', function (e) {
    e.preventDefault();
    var t = $(this),
        c = t.closest('.change_rates'),
        title = t.text();
    c.find('.active_lang').html(title);
    c.find('.select_box').removeClass('open_select');
    t.parent('li').siblings().find('a').removeClass('active');
    t.addClass('active');
    calculate();
    table();
    return false;
});
$(document).on('change', '.s_curr', function (e) {
    var t = $(this),
        name = t.attr('name'),
        from = $('.s_curr[name=from]'),
        to = $('.s_curr[name=to]');
    if (name === "from") {
        if (t.val() === "azn") {
            to.find('option[value!=azn]').show();
            to.find('option[value=azn]').hide();
            to.val(to.find('option:nth-child(2)').val());
        } else {
            to.find('option[value=azn]').show();
            to.find('option[value!=azn]').hide();
            to.val(to.find('option').val());
        }
    }
    calculate();
    table();
});
$(document).on('keyup', '.input_value', calculate);
